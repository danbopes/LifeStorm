import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert } from "react-native";
import { navigation } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import ReactDOM   from 'react-dom';
import { Profil } from '../screens/Profile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
  },
  texts: {
    height: 150,
  },
  signupText: {
    color:'#000000',
    fontSize:14
  },
  signupButton: {
    color:'#ff0000',
    fontSize:16,
    fontWeight:'500'
  },
  loginButton: {
    fontSize: 24
  },
  loginTextCont: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
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

export default class Login extends Component {

  constructor(props) {

    super(props)

    this.state = {

      UserEmail: '',
      UserName: '',
      UserPassword: ''

    }

  }

  UserLoginFunction = () =>{

   const { UserEmail }  = this.state ;
   const { UserName }  = this.state ;
   const { UserPassword }  = this.state ;


  fetch('https://lifestormweb.000webhostapp.com/User_Login.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      email: UserEmail,

      password: UserPassword,

      name: UserName

    })

  }).then((response) => response.json())
        .then((responseJson) => {

          // If server response message same as Data Matched
         if(responseJson === 'Data Matched')
          {

              //Then open Profile activity and send user email to profile activity.
              this.props.navigation.navigate("Tabs");
              store.dispatch({
                type: 'ADD_USER',
                user: { Name: UserName }
              });

          }
          else{

            Alert.alert(responseJson);
          }

        }).catch((error) => {
          console.error(error);
        });

    }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.loginTextCont}>
        <Text style={{fontSize: 36, fontFamily: "Futura" }}>
          Willkommen zu</Text> <Text style={{fontSize: 36, fontFamily: "Futura", color:'#ff0000' }}>LifeStorm!</Text>
        <View style={{width: 10, height: 5 }} />
        </View>
        <TextInput style={styles.inputBox}
            onChangeText={UserName => this.setState({UserName})}
            underlineColorAndroid='#ffffff'
            placeholder="Ihre Name"
            placeholderTextColor = "#ffffff"
            selectionColor="#ffffff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            />
        <TextInput style={styles.inputBox}
            onChangeText={UserEmail => this.setState({UserEmail})}
            underlineColorAndroid='#ffffff'
            placeholder="Ihre E-mail"
            placeholderTextColor = "#ffffff"
            selectionColor="#ffffff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            />
        <TextInput style={styles.inputBox}
            onChangeText={UserPassword => this.setState({UserPassword})}
            underlineColorAndroid='#ffffff'
            placeholder="Passwort"
            secureTextEntry={true}
            placeholderTextColor = "#ffffff"
            ref={(input) => this.password = input}
            />
         <TouchableOpacity
         style={styles.button}
         onPress={this.UserLoginFunction}
         >
           <Text style={styles.buttonText}>Sich einloggen</Text>
         </TouchableOpacity>
        <View style={styles.signupTextCont}>
           <Text style={styles.signupText}>
           Haben Sie kein Konto?
           </Text>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}> <Text style={styles.signupButton}> Sich anmelden</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

var userReducer = function(state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_USER') {
    state.push(action.user);
  }
  return state;
}

export var store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <Profil />
  </Provider>,
  document.getElementById('root')
)
