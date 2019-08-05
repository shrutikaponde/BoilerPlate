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
import styles from './styles' ;

class LoginView extends Component {
    handleLogin = () => {
        this.props.onLogin('username', 'password');
    };

    handleRegister = () => {
        this.props.navigation.navigate("Register")
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Scrollview contentContainerStyle={{ flexGrow: 1, backgroundColor: '#FFF' }} keyboardShouldPersistTaps='handled'>
                    <View style={{ flex: 3.5, justifyContent: 'center' }}>
                    </View>
                    <View style={{ flex: 4.5 }}>
                        <View style={{ flexDirection: 'column', marginLeft: stringConstants.MARGIN_VALUE - 20, marginRight: stringConstants.MARGIN_VALUE }}>
                            {/* <TextInput
                                textContentType="username"
                                placeholder="Mobile Number"
                                placeholderTextColor="#707070"
                                style={styles.input}
                            />
                            <TextInput
                                textContentType="password"
                                secureTextEntry={true}
                                placeholder="PASSWORD"
                                placeholderTextColor="#707070"
                                style={styles.input}
                            /> */}
                            <TouchableOpacity onPress={this.handleLogin}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleRegister}>
                                <Text>Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Scrollview>
            </View>
        );
    }
}


LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;