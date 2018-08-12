import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Tabs from './src/screens/Tabs';
import Register from './src/screens/Register';

const Navigation = createStackNavigator({
  Login: {screen:Login,},
  Register: {screen:Register,},
  Tabs: {screen:Tabs,}
})
export default Navigation;
