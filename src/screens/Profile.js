import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { navigation } from 'react-navigation';
import { Header } from "react-native-elements";
import { connect, Provider } from "react-redux";
import ReactDOM   from 'react-dom';

function mapStateToProps (state) {
  return {
    user: state.user
  }
}
export class Profil extends React.Component {

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Profil', style: { color: '#FF0000', fontSize: 20, fontWeight: 'bold' } }}
          outerContainerStyles={{ backgroundColor: '#ffffff' }}
        />
        <Text>Willkommen { this.props.user } </Text>
      </View>
     )
  }
}

export default connect(mapStateToProps)(Profil)
