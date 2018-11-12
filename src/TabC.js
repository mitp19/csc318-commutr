import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";

class TabC extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 30, color: tintColor }}>{Icons.home}</FontAwesome>
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Home </Text>
      </View>
      )
  }
}

export default TabC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
