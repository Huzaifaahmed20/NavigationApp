import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";

class LoginForm extends Component {
  render() {
    console.log(this)
    // const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffeaa7" barStyle="dark-content" />
        <TextInput
          keyboardType="email-address"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholder="Username or Email"
        />
        <TextInput
          returnKeyType="go"
          underlineColorAndroid="transparent"
          style={styles.input}
          secureTextEntry
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
        />
        
        <Button title="Login"  style={styles.btnContainer}/>
          {/* <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginBottom: 30,
    paddingHorizontal: 10
  },
  btnContainer: {
    backgroundColor: "#c0392b",
    paddingVertical: 15
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "900"
  }
});

export default LoginForm;
