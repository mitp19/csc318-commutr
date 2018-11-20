import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text, Card, CardItem } from 'native-base';
import ForumCard from './ForumCard.js';
import Chat from './Chat.js';
class TabD extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props);
    this.firstpage = this.firstpage.bind(this);
    this.secondpage = this.secondpage.bind(this);
    this.thirdpage = this.thirdpage.bind(this);
    this.state = {
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false
    }
  }
  firstpage() {
    this.setState({
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false
    })
  }

  secondpage() {
    this.setState({
      page: 2,
      firstpageactive: false,
      secondpageactive: true,
      thirdpageactive: false
    })
  }
  thirdpage() {
    this.setState({
      page: 3,
      firstpageactive: false,
      secondpageactive: false,
      thirdpageactive: true
    })
  }

  chatView() {
    return (
      <Chat/>
    );
  }

  chatHomeView() {
    return (
      <Container style={styles.container}>
        <Card >
          <CardItem header button 
          onPress={this.thirdpage}>
          <Text>
            Search public chatrooms
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
          onPress={this.thirdpage}>
          <Text>
            Your Private Chatrooms
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
          onPress={this.thirdpage}>
          <Text>
            Create Own Chatroom
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

  forumView() {
    return (
    <Container style={styles.container}>
    <Content>
    <ForumCard> </ForumCard> 

    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
</Content>
    </Container>
    );

  }
  render() {
    const page = this.state.page ;
    let chatActive = this.state.secondpageactive;
    let shows = null;
    if (page == 1 ){
      shows = this.forumView();
    } else if (page == 2) {
      shows = this.chatHomeView();
      chatActive = this.state.secondpageactive;
    } else if (page == 3 ) {
      shows = this.chatView();
      chatActive = this.state.secondpageactive;
    }
    return (

      <Container >
        <Header hasSegment>
          <Body>
            <Segment>
              <Button active={this.state.firstpageactive} onPress={this.firstpage}>
                <Text>Forum</Text>
              </Button>
              <Button active={chatActive} onPress={this.secondpage}>
                <Text>Chat</Text>
              </Button>
            </Segment>
          </Body>
        </Header>
          {shows}
         </Container>
    );
  }
}

export default TabD

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
        backgroundColor: '#26365e',
        padding: 10},
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
