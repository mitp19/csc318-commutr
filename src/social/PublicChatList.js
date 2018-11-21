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
  }

  publicChatCard(title, num) {
    return(
      <Card>
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
              {name: title, type: 'public', anonymity: 'anonymous', type: 'Public'})}
                    >
                  <Text style={{fontSize: 8}}>Join Anonymously</Text>
                </Button>
              </Body>
              <Body>
              <Button rounded success small
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'public', anonymity: 'public', type: 'Public'})}
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
        {this.publicChatCard("TTC Haters Club", 15)}
        {this.publicChatCard("Sleep Deprived Club", 20)}
        {this.publicChatCard("I'm Bored Chat", 7)}
        {this.publicChatCard("Chaotic Chatroom :)", 18)}
        {this.publicChatCard("Christmas is Coming!!", 5)}
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
