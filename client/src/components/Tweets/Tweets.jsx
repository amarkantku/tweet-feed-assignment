import React, { Component } from 'react';
import SearchField from '../SearchField/SearchField';
import socket from '../../utils/socket';
import TweetsContainer from '../../containers/TweetsContainer';
import Tweet from './Tweet';

export default class Tweets extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        socket.on('tweet', tweet => {
            this.props.actions.setTweetsToStore({ data: tweet });
        });
    }
    
    onClickHandler = (value) => {
        this.props.actions.searchTweets(value);
    }

    render() {
        let content = this.props.tweets.map(function(tweet){
            return (
              <Tweet key={tweet.twid} tweet={tweet} />
            )
        });
        return (
            <div className="row">
                <SearchField onClick={this.onClickHandler}/>
                <div>
                    <ul className="tweets">{content}</ul>
                </div>
            </div>
        )
    }
}