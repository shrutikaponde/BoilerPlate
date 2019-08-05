import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as authActions from 'app/common/actions/authActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout : () => dispatch(authActions.requestLogout())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
