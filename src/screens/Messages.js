import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from "react-native-elements";

export default class Messagesss extends React.Component {
  render() {
    return (
      <View>
      <Header
        centerComponent={{ text: 'Nachrichten', style: { color: '#FF0000', fontSize: 20, fontWeight: 'bold' } }}
        outerContainerStyles={{ backgroundColor: '#ffffff' }}
      />
        <Text>Messages!</Text>
      </View>
    );
  }
}
