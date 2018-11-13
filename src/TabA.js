import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Card, CardItem, Icon, Button, Right
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

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
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='book' type='FontAwesome' />
            <Text style={{fontSize: 16}}>Books/Articles</Text>
              <Button transparent style={{marginLeft: 75}}>
                <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 32, color: 'black'}}/>
              </Button>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='ios-musical-notes' type='Ionicons' />
            <Text style={{fontSize: 16}}>Music</Text>
              <Button transparent style={{marginLeft: 136}}>
                <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 32, color: 'black'}}/>
              </Button>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='podcast' type='FontAwesome' />
            <Text>Podcasts</Text>
              <Button transparent style={{marginLeft: 120}}>
                <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 32, color: 'black' }}/>
              </Button>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='download' type='Entypo' />
            <Text>Your Downloaded Items</Text>
              <Button transparent style={{marginLeft: 27}}>
                <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 32, color: 'black'}}/>
              </Button>
          </CardItem>
        </Card>
      </View>
      )
  }
}

export default TabA

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
