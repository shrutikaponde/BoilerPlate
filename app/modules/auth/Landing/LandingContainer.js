import React, { Component } from "react";
import LandingView from "./LandingView";
import { connect } from "react-redux";
import {
  checknRequestAllPremissions,
  checkAndRequestLocation,
  checkAndRequestReadContacts,
  getCurrentPosition
} from "app/common/utils/permissions";
import { permissionConstants } from "app/common/constants";
import SplashScreen from 'react-native-splash-screen';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    SplashScreen.hide() ;

  }

  async componentDidMount() {
    await checknRequestAllPremissions()
    // granted = await checkAndRequestLocation();
    // if (granted === permissionConstants.GRANTED) {
    //   try {
    //     const location = await getCurrentPosition();
    //     // state location coordinates here
    //   } catch (err) {
    //     // state error msg here
    //     console.log(err);
    //   }
    // }
  }

  render() {
    return <LandingView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    nav: state.default
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer);
