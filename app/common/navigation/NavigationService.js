import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function goBack(key) {
  _navigator.dispatch(
    NavigationActions.back({
      key: key
    })
  );
}

function reset() {
  // Promise.all([
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: "HomeTabNavigator" })]
    }),
  )
// ]).then(() => navigate('Landing'))
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  reset
};
