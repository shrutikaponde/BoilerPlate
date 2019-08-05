import Api from "app/common/api";
import ApiConstants from "../ApiConstants";
 
export function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN + "?username=" + username + "&password=" + password,
    null,
    "post",
    null
  );
}

export function logoutUser() {
  return Api(ApiConstants.LOGOUT, null, "post", null);
}

export function registerUser(username, password) {
  return Api(
    ApiConstants.REGISTER + "?username=" + username + "&password=" + password,
    null,
    "post",
    null
  );
}