import React, { Component } from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  Container, Header, Content, Card, CardItem,
  Text, Body, Button, Icon, Title, Left, Right, Item, Input
} from "native-base";

import WhereGoing from './commute/WhereGoing.js';

class TabB extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Commute',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.bus}</FontAwesome>
  })

  render() {
    return (
      // <View>
        <WhereGoing/>
      // </View>
    );
  }
}

export default TabB

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#8e44ad',
    // padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
