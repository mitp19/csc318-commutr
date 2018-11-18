import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Card, CardItem, Icon, Button, Header, Body, Title, Right, Container
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

class TabA extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Media',
    tabBarIcon: ({ tintColor }) => 
    <View><FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome></View>
  });

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handlePress = this.handlePress.bind(this)
  };

  handlePress(category) {
    this.setState({
      counter: this.state.counter + 1
    })
    this.props.navigation.navigate(category)
  };

  render () {
    return (
      <Container style={styles.header}>
      <Header>
        <Right>
          <Body>
            <Title>Explore
            </Title>
          </Body>
          </Right>
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            showLoading
            cancelButtonTitle="Cancel"
            placeholder='Search' />
        </Header>
        <View style={styles.container}>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='book' type='FontAwesome' />
            <Text style={{fontSize: 16}}>Books/Articles</Text>
              <Button transparent 
              style={{marginLeft: 75}} 
              onPress={() =>
                    this.handlePress('BooksArticles')
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
                this.handlePress('Music')
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
                this.handlePress('Podcasts')
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
                this.handlePress('Downloads')
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