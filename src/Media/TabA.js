import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Card, CardItem, Icon, Button, Container
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

class TabA extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Media',
    tabBarIcon: ({ tintColor }) => 
    <View><FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome></View>
  });

  render () {
    return (
      <Container style={styles.header}>
        <View style={styles.container}>
        <Text style={styles.text}>Explore</Text>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='book' type='FontAwesome' />
            <Text style={{fontSize: 16}}>Books/Articles</Text>
              <Button transparent 
              style={{marginLeft: 75}} 
              onPress={() =>
                this.props.navigation.navigate('BooksArticles')
                  }>
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
              <Button transparent 
              style={{marginLeft: 136}}
              onPress={() =>
                this.props.navigation.navigate('Music')
              }
              >
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
            <Text style={{fontSize: 16}}>Podcasts</Text>
              <Button transparent 
              style={{marginLeft: 112.25}}
              onPress={() =>
                this.props.navigation.navigate('Podcasts')
              }>
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
            <Text style={{fontSize: 16}}>Your Downloaded Items</Text>
              <Button transparent 
              style={{marginLeft: 7.5}}
              onPress={() =>
                this.props.navigation.navigate('Downloads')
              }>
                <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 32, color: 'black'}}/>
              </Button>
          </CardItem>
        </Card>
      </View>
      </Container>
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
    padding: 40
  },
  header: {
    flex: 10
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})