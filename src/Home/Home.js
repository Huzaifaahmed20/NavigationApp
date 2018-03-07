import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home Screen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  forInput: {
    height: 40,
    width: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default Home;
