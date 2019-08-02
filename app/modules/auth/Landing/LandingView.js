import React, { Component } from 'react';
import {
    Button,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StatusBar
} from "react-native";
import PropTypes from 'prop-types';
import { stringConstants } from 'app/common/constants';
// import { Scrollview } from 'app/common/components';
import { persistInformationServices } from "app/common/services";
import images from 'app/common/config/images';
import LottieView from 'lottie-react-native';

class LandingView extends Component {

    constructor() {
        super()
        this.state = { loading: false }
        this.isPersistCallComplete = false
    }

    async componentDidMount() {
        this.accessToken = await persistInformationServices.getAccessToken().then((token) => { return token; })
        console.log(this.props.nav, "######################################### CDM accessToken", this.accessToken)
        
        this.isPersistCallComplete = true;
        if (this.accessToken) {
            console.log("######################################### CDM accessToken", this.accessToken)

            this.setLoading(true)
            this.handleAppOpen();
        }
    }

    async componentWillReceiveProps(nextProps) {
       console.log('$$$$$$$$$$$$$$$$$$$$$$$$$', nextProps.nav)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SUC")
        if (this.state.loading) { return true }
        return true;
    }

    setLoading(value) {
        this.setState({ loading: value });
    }

    handleAppOpen() {
        this.props.navigation.navigate('Home');
    }

    handleLogin() {
        this.props.navigation.navigate('Login');
    }

    renderLoadingScreen() {
        return (
            <View style={{ flex: 1, backgroundColor: stringConstants.APP_COLOR }}>
                <StatusBar />
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <LottieView style={{ marginTop: 15 }} source={images.loader} autoPlay loop />
                </View>
            </View>
        )
    }

    renderOnBoardingScreen() {
        return (
            <View style={{ flex: 1, backgroundColor: stringConstants.APP_COLOR }}>
                <StatusBar />
                <View style={{ flex: 0.25, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

                    <TouchableOpacity style={styles.otherContainer}
                        onPress={async () => {
                            this.handleLogin()
                        }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontFamily: stringConstants.JOSEFIN_BOLD, fontSize: 16, color: 'white' }}>start >></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        // if (!this.isPersistCallComplete) {
        //     return (
        //         <View style={{ flex: 1, backgroundColor: stringConstants.APP_COLOR }}>
        //             <StatusBar />
        //             <Text style={{ fontFamily: stringConstants.JOSEFIN_BOLD, fontSize: 16, color: 'white' }}>Hello !!</Text>
        //         </View>)
        // }

        if (this.accessToken !== undefined && this.accessToken !== null) {
            return this.renderLoadingScreen()
        } else {
            return this.renderOnBoardingScreen()
        }
    }
}

var styles = StyleSheet.create({
    text: {
        fontSize: 50,
        marginTop: stringConstants.SCREEN_HEIGHT / 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: stringConstants.JOSEFIN_BOLD
    },
});

LandingView.propTypes = {
    onLogin: PropTypes.func
};

export default LandingView;