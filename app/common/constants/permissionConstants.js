import { PermissionsAndroid } from "react-native";

const obj = {
  LOCATION : PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  READ_CONTACTS : PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  CALL_PHONE : PermissionsAndroid.PERMISSIONS.CALL_PHONE,
  READ_EXTERNAL_STORAGE : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  WRITE_EXTERNAL_STORAGE : PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  CAMERA : PermissionsAndroid.PERMISSIONS.CAMERA,

  GRANTED : PermissionsAndroid.RESULTS.GRANTED,
  NEVER_ASK_AGAIN : PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN,
  DENIED : PermissionsAndroid.RESULTS.DENIED
}
export default obj ;