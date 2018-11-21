import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Picker, Title, Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text, Card, CardItem } from 'native-base';
import ForumCard from './ForumCard.js';

class ChatHome extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
  }

  chatHomeView() {
    const { navigate } = this.props.navigation
    return (

      <Container style={styles.container}>
        <Card >
          <CardItem header button 
          onPress={() => navigate("ChatList")}>
          <Text>
            Browse Chatrooms
          </Text>
          <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 20, color: 'black'}}/>
                  </Body>
          </CardItem>
        </Card>
        <Card style={{alignItems: 'center'}}>
          <CardItem header button
          onPress={() => navigate("YourChatList")}>
          <Text>
            Your Chatrooms
          </Text>
          <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 20, color: 'black'}}/>
                  </Body>
          </CardItem>
        </Card>
        <Card style={{alignItems: 'center'}}>
          <CardItem header button
          onPress={() => navigate("CreateChat")}>
          <Text>
            Create Your Own Chatroom
          </Text>
          <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <Icon 
              name='chevron-circle-right' 
              type='FontAwesome' 
              style={{fontSize: 20, color: 'black'}}/>
          </Body>
          </CardItem>
        </Card>
    </Container>
    )
  }

  
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container >
        <Header hasSegment>
        <Body>
            <Title>Social</Title>
          </Body>
        </Header>
            <Segment>
              <Button first onPress={() => navigate("ForumCard")}>
                <Text>Forum</Text>
              </Button>
              <Button last active onPress={() => navigate("ChatHome")}>
                <Text>Chat</Text>
              </Button>
            </Segment>
          {this.chatHomeView()}
         </Container>
    )
  }
}

export default ChatHome

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
        backgroundColor: '#26365e',
        padding: 20},
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
