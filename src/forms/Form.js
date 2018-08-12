import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='#ffffff'
              placeholder="Ihre E-mail"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='#ffffff'
              placeholder="Passwort"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Sich anmelden</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#f91313',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffc9c9',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#f91313',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
