import { fork, all } from 'redux-saga/effects';
import TweetsSaga from './TweetsSaga';

export default function* rootSaga() {
    yield all([
        fork(TweetsSaga)
    ]);
}