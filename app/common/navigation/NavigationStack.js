import { createStackNavigator, createAppContainer } from 'react-navigation';

import Landing from 'app/modules/auth/Landing/index.js';
import Login from 'app/modules/auth/Login/index.js';
import Home from 'app/modules/home/Home/index.js';
import Register from 'app/modules/auth/Register/index.js';

const RNApp = createStackNavigator(
    {
        Landing: Landing,
        Login: Login,
        Register: Register,
        Home: Home,
    },
    {
        initialRouteName: 'Landing',
        defaultNavigationOptions: { header: null, gesturesEnabled: false },
    }
);

export default createAppContainer(RNApp);
