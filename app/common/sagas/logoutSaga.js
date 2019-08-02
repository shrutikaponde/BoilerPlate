/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, take, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/api/methods/loginUser';
// import * as logoutActions from 'app/actions';
import * as navigationActions from 'app/common/actions/navigationActions';
import * as types from 'app/common/actions/types';
// import refreshAsync from './refreshSaga';
import { AsyncStorage } from "react-native";

// Our worker Saga that logins the user
export default function* logoutAsync() {
   while(true){ // yield put(logoutActions.enableLoader());
    const action = yield take(types.LOGOUT_REQUEST);
    AsyncStorage.removeItem('accessToken')
    yield call(navigationActions.navigationReset);       

    // yield put(types.RESET_STATE);
    // yield put(loginActions.disableLoader({}));
}
}