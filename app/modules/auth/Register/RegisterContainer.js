import React, { Component } from "react";
import RegisterView from "./RegisterView";
import { connect } from "react-redux";
import * as authActions from "app/common/actions/authActions";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RegisterView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    nav: state.default
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onRegister: (un, pwd) => dispatch(authActions.requestRegisteration(un, pwd))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
