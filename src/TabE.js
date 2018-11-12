import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";

class TabE extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Canvas AR',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.paintBrush}</FontAwesome>

  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Canvas AR</Text>
      </View>
      )
  }
}

export default TabE

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
