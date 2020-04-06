import { combineReducers } from 'redux';
import tweetsReducer from './TweetsReducer';
const rootReducer = combineReducers({
    tweetsReducer
});

export default rootReducer;