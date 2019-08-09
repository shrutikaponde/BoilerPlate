import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Landing from "app/modules/auth/Landing/";
import Login from "app/modules/auth/Login/";
import Home from "app/modules/home/Home/";
import Register from "app/modules/auth/Register/";
import { Text, TouchableOpacity } from "react-native";

// const MainTabs = createBottomTabNavigator(
//   {
//     Home: Home
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routename } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routename
//       };
//     }
//   }
// );

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  {
    defaultNavigationOptions: { header: null, gesturesEnabled: false }
  }
);

const MainDrawer = createDrawerNavigator({
  // MainTabs: MainTabs,
  Home: HomeStack
  //   Settings: SettingsStack,
  //   Logout: LogoutStack
}
);

const AuthStack = createStackNavigator(
  {
    // Landing: Landing,
    Login: Login,
    Register: Register
    //   ForgotPassword: ForgotPassword,
    //   ResetPassword: ResetPassword
  },
  {
    defaultNavigationOptions: { header: null, gesturesEnabled: false }
  }
);

const AppStack = createStackNavigator(
  {
    App: MainDrawer
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>D</Text>
          </TouchableOpacity>
        ),
        headerTitle: routeName
      };
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    // Loading: Loading,
    Landing: Landing,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Landing"
  }
);

export default createAppContainer(SwitchNavigator);
