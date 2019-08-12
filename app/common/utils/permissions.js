import { Alert, PermissionsAndroid, Linking } from "react-native";
import { permissionConstants } from "app/common/constants";
import Geolocation from "@react-native-community/geolocation";
// import Permissions from 'react-native-permissions';

export function checkPermission(permission) {
  return PermissionsAndroid.check(permission).then(g => {
    return g;
  });
}

export function requestPermission(permission, rationale) {
  return PermissionsAndroid.request(permission, rationale);
}

export async function checkAndRequestPermission(permission, rationale) {
  let granted = await checkPermission(permission);
  if (granted) return permissionConstants.GRANTED;

  return await requestPermission(permission, rationale);
}

// LOCATION
export function checkAndRequestLocation() {
  const permission = permissionConstants.LOCATION;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

export function getCurrentPosition() {
  const geoOptions = {
    enableHighAccuracy: false,
    timeOut: 20000 //20 second
    // maximumAge: 1000 //1 second
  };
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => resolve(info),
      error => reject(error.message),
      geoOptions
    );
  });
}

// READ_CONTACTS
export function checkAndRequestReadContacts() {
  const permission = permissionConstants.READ_CONTACTS;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

// CALL_PHONE
export function checkAndRequestCallPhone() {
  const permission = permissionConstants.CALL_PHONE;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

// READ_EXTERNAL_STORAGE
export function checkAndRequestReadStorage() {
  const permission = permissionConstants.READ_EXTERNAL_STORAGE;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

// WRITE_EXTERNAL_STORAGE
export function checkAndRequestWriteStorage() {
  const permission = permissionConstants.WRITE_EXTERNAL_STORAGE;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

// CAMERA
export function checkAndRequestCamera() {
  const permission = permissionConstants.CAMERA;
  const rationale = null;

  return checkAndRequestPermission(permission, rationale);
}

async function locationAccessNeeded(granted) {
  return new Promise((resolve) => {
    if (granted === permissionConstants.GRANTED) return resolve(permissionConstants.GRANTED);

    if (granted === permissionConstants.NEVER_ASK_AGAIN) {
      Alert.alert(
        null,
        "You need to allow access for location",
        [
          {
            text: "OK",
            onPress: () => {
              // open settings for IOS
              // if (Permissions.canOpenSettings()) Permissions.openSettings()
              Linking.openSettings()
            }
          }
        ],
        { cancelable: false }
      );
    } else if (granted === permissionConstants.DENIED) {
      Alert.alert(
        null,
        "You need to allow access for location",
        [
          {
            text: "OK",
            onPress: async () => {
              const newGranted = await requestPermission(
                permissionConstants.LOCATION,
                null
              );
               return resolve(locationAccessNeeded(newGranted))
              }
          }
        ],
        { cancelable: false }
      );
    }
  })
}
export async function checknRequestAllPremissions() {
  const p1 = await checkAndRequestLocation();
  await locationAccessNeeded(p1)

  const p2 = await checkAndRequestReadContacts();
  const p3 = await checkAndRequestCallPhone();
  const p4 = await checkAndRequestReadStorage();
  const p5 = await checkAndRequestWriteStorage();
  const p6 = await checkAndRequestCamera();
}
