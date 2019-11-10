import {
  createAppContainer, createSwitchNavigator, createStackNavigator, NavigationActions
} from 'react-navigation';
import React, { Component } from 'react';

import MainTabNavigator from './MainTabNavigator';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 static _navigation = null;

 static _setNavigation(navigation) { //eslint-disable-line
   AppNavigator._navigation = navigation;
 }

 static navigate(path) {
   if (AppNavigator._navigation !== null) {
     AppNavigator._navigation.dispatch(NavigationActions.navigate({ routeName: path }));
   }
 }

 render() {
   return (
     <AppContainer ref={(nav) => {
       AppNavigator._setNavigation(nav);
     }}
     />
   );
 }
}

export default AppNavigator;

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
);
