/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, take, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import loginUser from 'app/common/api/methods/loginUser';
import * as loginActions from 'app/common/actions/loginActions';
// import * as navigationActions from 'app/actions/navigationActions';
import * as types from 'app/common/actions/types';
import refreshAsync from './refreshSaga';

// Our worker Saga that logins the user
export default function* loginAsync() {
    while(true){yield put(loginActions.enableLoader());
    const action = yield take(types.LOGIN_REQUEST);
    //how to call api
    const response1 = yield call(loginUser, action.username, action.password);
    //mock response
    const response = { success: true, data: { id: 1, accessToken: 'ewrewrewrerew' } };

    if (response.success) {
        console.log("login success")
        yield put(loginActions.onLoginResponse(response.data));
        yield put(loginActions.disableLoader({}));

        yield fork(refreshAsync, response.data.accessToken);        
    } else {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }}
}
