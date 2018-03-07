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
  TextInput
} from "react-native";
import Login from "./src/login/login";
import { StackNavigator } from "react-navigation";
import Home from "./src/Home/Home";
// type Props = {};
export default class App extends Component {
  render() {
    return <AppNavigate />;
  }
}
const AppNavigate = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   forInput: {
//     height: 40,
//     width: "100%"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
