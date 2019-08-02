import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducers from "app/common/reducers"; // where reducers is a object of reducers
import sagas from "app/common/sagas";

const config = {
  key: "root",
  storage,
  blacklist: ["default", "loadingReducer"],
  debug: true //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
  const freeze = require('redux-freeze')
  middleware.push(freeze)
}

const reducers = persistCombineReducers(config, rootReducers);
// const rootReducer = (state = initialState, action) => {
//     if(action.type == "RESET_STATE") {
//         state = undefined;
//         persistor.flush().then(() => { return persistor.purge() })
//         console.log('RESET_STATE', state)

//     }
//     return reducers(state, action);
// }
const clearState = (reducer) =>  {
    return function (state, action) {
  
      if (action.type === 'RESET_STATE') {
        state = undefined;
      }
  
      return reducer(state, action);
    };
  }
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(clearState(reducers), undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
//   console.log("Test", store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;