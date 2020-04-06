import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({tweet}) => {
    return(
        <li className={"tweet" + (tweet.active ? ' active' : '')}>
            <img src={tweet.user.profile_image_url} className="avatar"/>
            <blockquote>
                <cite>
                    <a href={"http://www.twitter.com/" + tweet.user.screen_name}>{tweet.user.name}</a> 
                    <span className="screen-name">@{tweet.user.screen_name}</span> 
                </cite>
                <span className="content">{tweet.text}</span>
            </blockquote>
        </li>
    )
}

Tweet.propTypes = {
	tweet: PropTypes.object.isRequired,
};

export default Tweet;