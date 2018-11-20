import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Container, Header, Icon, Picker, Left, Right, Button, Body, Title, Card, CardItem,Content
} from 'native-base';

class PlaceHolderMusicPodcast extends Component {
  constructor(props) {
    super(props)
    //Retrieve last state
    this.state = {
      button: 'controller-paus',
      musicState: 'Playing'
    }
  }

  render() {
    return(
      <Container style={styles.container}>
      <Header>
          <Left>
            <Button transparent
            onPress={() =>
              this.props.navigation.goBack(this.props.navigation.state.key)
            }>
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
            </Left>
            <Body>
            <Title>{this.state.musicState}...</Title>
            </Body>
          <Right />
            </Header>
            <Container style={styles.musicContainer}>
            <Icon 
                name='play-circle' 
                type='FontAwesome' 
                style={{fontSize: 100, color: 'white'}}/>
            <Text style={styles.title}>
              {this.props.navigation.state.params.title}
            </Text>
            <Text style={styles.artist}>
              by {this.props.navigation.state.params.artist}
            </Text>
            <View style={{flexDirection: 'row', alignContent: 'stretch'}}>
            <Button 
                transparent 
                    >
            <Icon 
                name='controller-fast-backward' 
                type='Entypo' 
                style={{fontSize: 30, color: 'white'}}/>
                </Button>
                <Button 
                transparent 
                onPress={() => {
                  {if (this.state.button === 'controller-play') {
                    this.setState({button: 'controller-paus', musicState: 'Playing'})
                  } else if (this.state.button === 'controller-paus') {
                    this.setState({button: 'controller-play', musicState: 'Paused'})
                  }        
                }}}
                    >
              <Icon 
                name={this.state.button}
                type='Entypo' 
                style={{fontSize: 30, color: 'white'}}/>
                </Button>
                <Button transparent>
              <Icon 
                name='controller-fast-forward' 
                type='Entypo' 
                style={{fontSize: 30, color: 'white'}}/>
                </Button>
              </View>
            </Container>
    </Container>
    )
  }
  
}
export default PlaceHolderMusicPodcast;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#c0392b'
  },
  musicContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 40
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  artist: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'normal',
  }
})