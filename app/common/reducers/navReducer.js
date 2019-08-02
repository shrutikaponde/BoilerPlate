import AppNavigator from 'app/common/navigation/NavigationStack';
// import helper from './common/util/helper';
import _ from 'lodash';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Landing'));
const NAVIGATE = 'Navigation/NAVIGATE';

// const alreadyPushed = (state, action) => {
//   let recentRouteName;
//   try {
//     const tempState = _.cloneDeep(state)
//     recentRouteName = helper.getLastRoute(tempState);
//   } catch (error) {
//     //console.log("error",error)
//   }
  
//   if (state.routes.length > 1 && state.routes[state.routes.length - 1].routeName === action.routeName && action.routeName !=="BeemoniHomeScreen") {
//     return true;
//   }else if (state.routes.length > 1 && recentRouteName.routeName ? recentRouteName.routeName ==action.routeName : false){
//     return true
//   }
//   return false;
// };

const navReducer = (state = initialState, action) => {
//   if (action.type === NAVIGATE && alreadyPushed(state, action)) {
//     return state;
//   }
  
  const nextState = AppNavigator.router.getStateForAction(action, state);
  console.log('navReducer', nextState)
  return nextState || state;
};

export default navReducer;