import {
    SEARCH_TWEETS_SUCCESS,
    SET_ERROR_INFO,
    RESET_STORE_DATA,
} from '../actionTypes/TweetActionTypes';

const initialState = {
    tweets: [],
    errors: {},
};
export default function TweetReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_TWEETS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                tweets: [...state.tweets, data]
            }
        }
        case SET_ERROR_INFO : {
            return {
                ...state,
                errors: action.payload.data
            }
        }
        case RESET_STORE_DATA : {
            return initialState;
        }
        default:
            return state;
    }
}