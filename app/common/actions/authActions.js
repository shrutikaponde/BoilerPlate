/*
 * Reducer actions related with authentication
 */
import * as types from './types';

// 
// SIGNIN ACTIONS
//
export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

// 
// SIGNUP ACTIONS
//
export function requestRegisteration(username, password) {
    return {
        type: types.REGISTER_REQUEST,
        username,
        password
    };
}

export function registerFailed() {
    return {
        type: types.REGISTER_FAILED
    };
}

export function onRegisterResponse(response) {
    return {
        type: types.REGISTER_RESPONSE,
        response
    };
}

// 
// LOGOUT ACTIONS
//
export function requestLogout() {
    return {
        type: types.LOGOUT_REQUEST,
    };
}
