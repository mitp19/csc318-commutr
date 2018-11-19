import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Container, Header, Icon, Left, Right, Button, Body, Title, Card, CardItem, Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

class PlaceHolderBook extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>
  })

  render () {
    return (
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
          <Title>{this.props.navigation.state.params.title}</Title>
          </Body>
          <Right />
        </Header>
          <Content padder>
            <Text>You're currently reading "{this.props.navigation.state.params.title}".</Text>
        </Content>
      </Container>
      )
  }
}

export default PlaceHolderBook;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})