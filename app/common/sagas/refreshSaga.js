import { call } from "redux-saga/effects";
import * as navigationActions from "app/common/actions/navigationActions";
import persistInformationServices from "app/common/services/persistInformationServices";
import {
  LOGIN_RESPONSE,
  REGISTER_RESPONSE,
  LOGOUT_RESPONSE
  //   RESET_STATE
} from "app/common/actions/types";

export default function* refreshAsync(response, action) {
  switch (action) {
    case LOGIN_RESPONSE:
      persistInformationServices.setAccessToken(response.accessToken);
      yield call(navigationActions.navigateToHome);
      break;
    case REGISTER_RESPONSE:
      yield call(navigationActions.navigateToLogin);
      break;
    case LOGOUT_RESPONSE:
      persistInformationServices.resetAll();
      //   yield put(RESET_STATE);
      yield call(navigationActions.navigateToLanding);
      break;
    default:
      console.log("refresh default do nothing");
  }
}
