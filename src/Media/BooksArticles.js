import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

class BooksArticles extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>

  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Books/Articles</Text>
        
      </View>
      )
  }
}

export default BooksArticles;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 40,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})