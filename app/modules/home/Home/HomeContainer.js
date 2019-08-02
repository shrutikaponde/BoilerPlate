import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as logoutActions from 'app/common/actions/logoutActions';

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
        onLogout : () => dispatch(logoutActions.requestLogout())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
