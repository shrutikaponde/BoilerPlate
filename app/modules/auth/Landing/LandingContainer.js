import React, { Component } from 'react';
import LandingView from './LandingView';
import { connect } from 'react-redux';

class LandingContainer extends Component {
    constructor(props) {
        super(props);
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
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingContainer);
