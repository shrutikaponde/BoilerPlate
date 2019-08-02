/*
 * Reducer actions related with logout
 */
import * as types from './types';

export function requestLogout(username, password) {
    return {
        type: types.LOGOUT_REQUEST,
    };
}