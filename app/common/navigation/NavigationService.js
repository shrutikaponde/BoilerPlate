import { NavigationActions, StackActions } from 'react-navigation';

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
    _navigator.dispatch(
        StackActions.reset({
            key: null,
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Landing' })],
        })
    )
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    reset
};
