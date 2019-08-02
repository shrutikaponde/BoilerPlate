/**
 *  Redux saga class init
 */
import { fork, all, put, take, takeEvery, takeLeading } from 'redux-saga/effects';
import * as types from 'app/common/actions/types';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';

export default function* watch() {
    yield all([fork(loginSaga), fork(logoutSaga)]);
}
