// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

// import {hashSync} from 'bcryptjs'
import { take, call, put, fork, race } from "redux-saga/effects";
import * as authActions from "app/common/actions/authActions";
import {
  loginUser,
  logoutUser,
  registerUser
} from "app/common/api/methods/authUser";
import {
  RESET_STATE,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_RESPONSE,
  SET_AUTH,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  CHANGE_FORM,
  REQUEST_ERROR
} from "app/common/actions/types";
import refreshAsync from "./refreshSaga";

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize({ username, password, isRegistering }) {
  // We send an action that tells Redux we're sending a request
  //   yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    const hash = ""; // hashSync(password, salt)
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(registerUser, username, password);
    } else {
      response = yield call(loginUser, username, password);
    }

    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    // yield put({ type: REQUEST_ERROR, error: error.message });
    console.log("sending request error");

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    // yield put({ type: SENDING_REQUEST, sending: false });
    console.log("sending request complete");
  }
}

/**
 * Effect to handle logging out
 */
export function* logout() {
  // We tell Redux we're in the middle of a request
  //   yield put({ type: SENDING_REQUEST, sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(logoutUser);
    // yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    // yield put({ type: REQUEST_ERROR, error: error.message });
  }
}

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // yield put(authActions.enableLoader());

    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const action = yield take(LOGIN_REQUEST);

    const { username, password } = action;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { username, password, isRegistering: false }),
      logout: take(LOGOUT_REQUEST)
    });

    //mock response for login success
    const response = {
      success: true,
      data: { id: 1, accessToken: "ewrewrewrerew" }
    };

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      //   yield put({type: SET_AUTH, newAuthState: true}) // User is logged in (authorized)
      //   yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form

      yield put(authActions.onLoginResponse(response.data));
      // TODO : this should be in refreshSaga
      yield fork(refreshAsync, response.data, LOGIN_RESPONSE); //   forwardTo('/dashboard') // Go to dashboard page

      //   yield put(authActions.disableLoader({}));
    } else {
      yield put(authActions.loginFailed());
      //   yield put(authActions.disableLoader({}));
      setTimeout(() => {
        Alert.alert("BoilerPlate", response.Message);
      }, 200);
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow() {
  while (true) {
    // TODO : enable loader
    yield take(LOGOUT_REQUEST);
    // yield put({ type: SET_AUTH, newAuthState: false });
    yield call(logout);
    yield fork(refreshAsync, "SUCCESS", LOGOUT_RESPONSE); // forwardTo("/");
    // TODO : disable loader
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const action = yield take(REGISTER_REQUEST);
    const { username, password } = action;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {
      username,
      password,
      isRegistering: true
    });

    //mock response for registeration success
    const response = {
      success: true,
      data: { id: 1, accessToken: "ewrewrewrerew" }
    };

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      //   yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized) after being registered
      //   yield put({
      //     type: CHANGE_FORM,
      //     newFormState: { username: "", password: "" }
      //   }); // Clear form
      yield fork(refreshAsync, response.data, REGISTER_RESPONSE); //   forwardTo('/dashboard') // Go to dashboard page
    }
  }
}
