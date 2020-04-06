import {
    SEARCH_TWEETS,
    SEARCH_TWEETS_SUCCESS,
    SET_ERROR_INFO,
    RESET_STORE_DATA,
} from '../actionTypes/TweetActionTypes';


export const searchTweets = (keyword) => ({
    type: SEARCH_TWEETS,
    payload: {
        keyword
    }
});

export const setTweetsToStore = (payload) => ({
    type: SEARCH_TWEETS_SUCCESS,
    payload
});

export const setErrorInfo = (payload) => ({
    type: SET_ERROR_INFO,
    payload
});

export const resetStore = () => ({
    type: RESET_STORE_DATA
})