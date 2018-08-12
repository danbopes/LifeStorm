import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { navigation } from 'react-navigation';
import Secured from '../screens/Secured';
import Messages from '../screens/Messages';
import Musik from '../screens/Musik';
import Profile from '../screens/Profile';
import Videos from '../screens/Videos';

export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <Tabnav />
    );
  }
}

const Tabnav =  createBottomTabNavigator({
  Profil: {screen:Profile,},
  Neuigkeiten: {screen:Secured,},
  Nachrichten: {screen:Messages,},
  Musik: {screen:Musik,},
  Videos: {screen:Videos,}
});
