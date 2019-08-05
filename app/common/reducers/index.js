/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as authReducer from './authReducer';
import * as navReducer from './navReducer';

export default Object.assign(authReducer, loadingReducer, navReducer);