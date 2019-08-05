/**
 *  Redux saga class init
 */
import { fork, all, put, take, takeEvery, takeLeading } from 'redux-saga/effects'
import { loginFlow, logoutFlow, registerFlow } from './authSaga'

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* watch() {
    yield all([fork(loginFlow), fork(logoutFlow), fork(registerFlow)]);
}