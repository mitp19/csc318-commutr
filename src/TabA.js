import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TabA extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Media',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>

  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Media</Text>
      </View>
      )
  }
}

export default TabA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
