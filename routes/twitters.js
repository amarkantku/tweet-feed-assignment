const express = require('express');
const twitter = require('twitter');
const createError = require('http-errors');
const LRUCache = require('../utils/Cache');
const Tweets = require('../models/Tweets');
const TweetStreamHandler = require('../utils/TweetStreamHandler');

const router = express.Router();
const cache = new LRUCache();

const Twitter = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/**
 * @param {string} param - keyword to search tweets 
 * @param {Socket} io - Socket.io instance 
 */
const getStreamTweet = (param, io) => {
    /**
     * emit event, while changing the search keywords
     */
    io.emit('keyword-changed', true);
    Twitter.stream('statuses/filter', { track: param, language: 'en', src: 'trend_click' }, (stream) => {
        TweetStreamHandler(stream, io, Tweets);
    });
}

const responseFormatter = (tweets, limit, page, count) => {
    return {
        data: tweets,
        limit,
        current: page,
        previous: page > 1 ? page - 1 : null,
        count: count,
        next: page + 1,
        pages: Math.ceil(count / limit),
    };
}

module.exports = ({ io }) => {
    /**
     * To search and feed tweets into mongodb.
     */
    router.get('/search', (req, res, next) => {
        const { q, lang } = req.query;
        if (!q) {
            res.status(400).json({ error: 'Missing required parameter `q`' });
        } else {
            getStreamTweet(q, io);
            res.send();
        }
    });

    router.get('/', (req, res, next) => {
        const limit = 25;
        const page = Math.max(0, req.query.page || 1);
        const query = {
            text: {
                $regex: req.query.q, 
                $options: 'i'
            },
            lang: req.query.lang || 'en',
        };
        const fields = {};
        Tweets.find(query, fields, { skip: limit * page, limit: limit }, function(err, tweets) {
            let noOfRecords = cache.read(req.query.q);
            if (!noOfRecords) {
                Tweets.countDocuments(query).exec((err, count) => {
                    cache.write(req.query.q, count);
                    res.json(responseFormatter(tweets, limit, page, count));
                });
            } else {
                res.json(responseFormatter(tweets, limit, page, noOfRecords));
            }
            
        });
    });
    return router;
}


