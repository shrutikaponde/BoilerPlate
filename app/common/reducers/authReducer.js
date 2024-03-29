/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/common/lib/createReducer';
import * as types from 'app/common/actions/types';

const initialState = {
    isLoggedIn: false,
    id: -1,
    username: '',
    password: ''
};

export const authReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id,
            isLoggedIn: true
            
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    },
    [types.LOGOUT_REQUEST]() {
        return {
            ...initialState
        };
    }
});
