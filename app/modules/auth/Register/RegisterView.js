import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class RegisterView extends Component {
  handleRegister = () => {
    this.props.onRegister('new_username', 'new_password')
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.handleRegister}>
          <Text>Click here to get registered</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

RegisterView.propTypes = {
  onRegister: PropTypes.func
};

export default RegisterView;