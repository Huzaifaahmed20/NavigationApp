/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import {StackNavigation} from 'react-navigation'
import  LoginForm  from "./loginForm";
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
          <Text style={styles.title}>An App made for Illustrators using React Native</Text>
        </View>
        <View style={styles.formContainer}>
        <LoginForm/>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeaa7"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    height: 100,
    width: 100
  },
  title:{
    marginTop:10,
   width:250,
   textAlign:'center',
   fontWeight:"900"

  }
});

