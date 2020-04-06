const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    uid: String,
    id_str: String,
    name: String,
    screen_name:  String,
    location: String,
    description: String,
    followers_count: Number,
    friends_count: Number,
    statuses_count: Number,
    profile_image_url: String,
});

const TweetsSchema = new Schema({
    created_at: Date,
    twid: String,
    text: String,
    lang: String,
    user: User,
    active: Boolean,
});

const Tweets = mongoose.model('Tweets', TweetsSchema);
module.exports = Tweets;
