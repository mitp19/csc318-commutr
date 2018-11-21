import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Icon, Segment, Content, Text, Card, CardItem, Title} from 'native-base';

class PublicChatList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
    this.state = {
      groups: [
        {name: "TTC Haters Club",
        memberNum: 15,
        members: this.generateUsers(15),
        type: 'Public'},
        {name: "Sleep Deprived Club",
        memberNum: 20,
        members: this.generateUsers(20),
        type: 'Public'},
        {name: "I'm Bored Chat",
        memberNum: 7,
        members: this.generateUsers(7),
        type: 'Public'},
        {name: "Chaotic Chatroom :)",
        memberNum: 18,
        members: this.generateUsers(18),
        type: 'Public'},
        {name: "Christmas is Coming!!",
        memberNum: 5,
        members: this.generateUsers(5),
        type: 'Public'}
      ]
    }
  }

  generateUsers(num) {
    let users = []
    for (let i = 1; i <= num; i++) {
      let name = 'User' + i
      user = {}
      user.name = name
      user.reported = false
      users.push(user)
    }
    return(users)
  } 

  publicChatCard(title, num, members) {
    return(
      <Card key={title}>
      <CardItem style={{height: 90, justifyContent: 'center' ,alignContent: 'center'}} bordered>
            <View>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 9}}>{num} people are currently in this chatroom</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <View>
            <Body>
              <Button dark small rounded
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'public', anonymity: 'anonymous', type: 'Public', 
            members: members, page: 'PublicChatList'})}
                    >
                  <Text style={{fontSize: 8}}>Join Anonymously</Text>
                </Button>
              </Body>
              <Body>
              <Button rounded success small
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'public', anonymity: 'public', type: 'Public',
            members: members, page: 'PublicChatList'})}
                    >
                  <Text style={{fontSize: 8}}>Join as Public User</Text>
                </Button>
              </Body>
              </View>
              </Body>
          </CardItem>
    </Card>
    )
  }

  chatList() {
    return(
      this.state.groups.map(group => {
        return(
          this.publicChatCard(group.name, group.memberNum, group.members))
      })
    )
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container >
        <Header hasSegment>
        <Left>
        <Button transparent
            onPress={() => navigate("ChatHome")
            }  
            >
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title>Public Chatrooms</Title>
          </Body>
          <Right/>
          </Header>
            <Segment>
              <Button first onPress={() => navigate("ForumCard")}>
                <Text>Forum</Text>
              </Button>
              <Button last active onPress={() => navigate("ChatHome")}>
                <Text>Chat</Text>
              </Button>
            </Segment>
        <Container style={styles.container}>
        <ScrollView>
        {this.chatList()}
        </ScrollView>
    </Container>
      </Container>
    )
  }
}

export default PublicChatList

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
