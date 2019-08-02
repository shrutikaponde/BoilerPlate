import React, { Component } from 'react';
import {
    Button,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import PropTypes from 'prop-types';
import { stringConstants } from 'app/common/constants';
import { Scrollview } from 'app/common/components';
import styles from './styles';

class RegisterNowView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Scrollview contentContainerStyle={{ flexGrow: 1, backgroundColor: '#FFF' }} keyboardShouldPersistTaps='handled'>
                    <View style={{ flex: 3.5, justifyContent: 'center' }}>
                    </View>
                    <View style={{ flex: 4.5 }}>
                        <View style={{ flexDirection: 'column', marginLeft: stringConstants.MARGIN_VALUE - 20, marginRight: stringConstants.MARGIN_VALUE }}>
                            <Text>Registered</Text>
                        </View>
                    </View>
                </Scrollview>
            </View>
        );
    }
}


RegisterNowView.propTypes = {
    onLogin: PropTypes.func
};

export default RegisterNowView;