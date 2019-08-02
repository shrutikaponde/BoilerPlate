/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as navReducer from './navReducer';

export default Object.assign(loginReducer, loadingReducer, navReducer);
