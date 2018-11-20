import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Card, CardItem, Icon, Button, Container
} from 'native-base';

let state = {
  downloaded: [
    {
      type: "Podcasts",
      genre: ["key1"],
      title: "Dreamboy",
      artist: "Night Vale Presents"
    },
    {
      type: "Podcasts",
      genre: ["key7"],
      title: "Forever Ago",
      artist: "American Public Media"
    },
    {
      type: "Books/Articles",
      genre: ["key5"],
      title: "A Gentleman in Moscow",
      artist: "Amor Towles"
    },
    {
      type: "Books/Articles",
      genre: ["key2"],
      title: "Little Fires Everywhere",
      artist: "Celeste Ng"
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "Party For One",
      artist: "Carly Rae Jepsen"
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Rose-Colored Boy",
      artist: "Paramore"
    }
  ]
}

import FontAwesome, { Icons } from 'react-native-fontawesome';

class TabA extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Media',
    tabBarIcon: ({ tintColor }) => 
    <View><FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome></View>
  });

  constructor(props) {
    super(props)
    this.state = state
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  render () {
    return (
      <Container style={styles.header}>
      {console.log(this.props.navigation.state.params)}
        <View style={styles.container}>
        <Text style={styles.text}>Explore</Text>
        <Card>
          <CardItem style={{width: 300}}>
            <Icon name='book' type='FontAwesome' />
            <Text style={{fontSize: 16}}>Books/Articles</Text>
              <Button transparent 
              style={{marginLeft: 75}} 
              onPress={() =>
                {let downloads;
                  if (this.props.navigation.state.params) {
                  downloads = this.props.navigation.state.params.downloaded
                } else {
                  downloads = this.state.downloaded
                }
                this.setState({downloaded: downloads})
                  this.props.navigation.navigate('BooksArticles', 
                {downloaded: downloads})
                  }}>
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
                {let downloads;
                  if (this.props.navigation.state.params) {
                  downloads = this.props.navigation.state.params.downloaded
                } else {
                  downloads = this.state.downloaded
                }
                this.setState({downloaded: downloads})
                  this.props.navigation.navigate('Music', 
                {downloaded: downloads})
                  }}
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
                {let downloads;
                  if (this.props.navigation.state.params) {
                  downloads = this.props.navigation.state.params.downloaded
                } else {
                  downloads = this.state.downloaded
                }
                this.setState({downloaded: downloads})
                  this.props.navigation.navigate('Podcasts', 
                {downloaded: downloads})
                  }}>
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