import { all, takeLatest, put, call } from 'redux-saga/effects';
import { searchTweetsApi } from '../interfaces';
import { SEARCH_TWEETS } from '../actionTypes/TweetActionTypes';
import { setErrorInfo, resetStore } from '../actions/TweetsActions';

export function* searchTweetsSaga(action) {
    try {
        yield put(resetStore());
        yield call(searchTweetsApi, action.payload);
    } catch (error) {
        yield put(setErrorInfo(error.data));
    }
}

export default function* root() {
    yield all([
        takeLatest(SEARCH_TWEETS, searchTweetsSaga),
    ]);
}

