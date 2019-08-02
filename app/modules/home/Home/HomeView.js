import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        this.props.onLogout()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={this.handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeView;
