/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import {
    View
} from "react-native";
import { stringConstants } from 'app/common/constants';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/common/navigation';
import configureStore from 'app/common/store/configureStore';

const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<View style={{ flex: 1, backgroundColor: stringConstants.APP_COLOR }} />}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }
}
