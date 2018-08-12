import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Alert,
  TextInput,
  AppRegistry
} from 'react-native';
import { navigation } from 'react-navigation';

import Form from '../forms/Form';

export default class Register extends Component {
  constructor(props) {

    super(props)

    this.state = {

      UserName: '',
      UserEmail: '',
      UserPassword: ''

    }

  }

  UserRegistrationFunction = () =>{


 const { UserName }  = this.state;
 const { UserEmail }  = this.state;
 const { UserPassword }  = this.state;



fetch('https://lifestormweb.000webhostapp.com/user_registration.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: UserName,
    email: UserEmail,
    password: UserPassword
  })

}).then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});


  }

	render() {
		return(
			<View style={styles.container}>
         <TextInput style={styles.inputBox}
          underlineColorAndroid='#ffffff'
          placeholder="Ihre Name"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          onChangeText= {UserName => this.setState({UserName})}
          onSubmitEditing={()=> this.password.focus()}
          />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='#ffffff'
              placeholder="Ihre E-mail"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText= {UserEmail => this.setState({UserEmail})}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='#ffffff'
              placeholder="Passwort"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText= {UserPassword => this.setState({UserPassword})}
              ref={(input) => this.password = input}
              />
           <TouchableOpacity onPress={this.UserRegistrationFunction} style={styles.button}>
             <Text style={styles.buttonText}>Sich anmelden</Text>
           </TouchableOpacity>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Haben Sie schon einen Account?</Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}><Text style={styles.signupButton}> Sich einloggen</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#FFF5F5',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#000000',
  	fontSize:14
  },
  signupButton: {
  	color:'#f91313',
  	fontSize:16,
  	fontWeight:'500'
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

AppRegistry.registerComponent('Register', () => Register);
