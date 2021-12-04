import {all} from 'redux-saga/effects';
import coinsSagas from './app/saga';

export default function* rootSaga(getState) {
    yield all([
        coinsSagas()
    ]);
}
