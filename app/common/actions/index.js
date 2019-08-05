// export action creators
import * as navigationActions from './navigationActions';
import * as authActions from './authActions' ;

export const ActionCreators = Object.assign(
    {},
    authActions,
    navigationActions,
);
