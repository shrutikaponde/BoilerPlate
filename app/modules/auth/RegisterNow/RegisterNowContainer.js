import React, { Component } from 'react';
import RegisterNowView from './RegisterNowView';
import { connect } from 'react-redux';

class RegisterNowContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RegisterNowView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterNowContainer);
