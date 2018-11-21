import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Icon, Segment, Content, Text, Card, CardItem, Title} from 'native-base';

class YourChatList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
    this.state = {
      groups: [
        {name: "Group TBD"}
      ]
    }
  }

  privateChatCard(title, num, type) {
    return(
      <Card>
      <CardItem style={{ 
        alignItems: 'center'}} bordered>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 12}}>{type} chatroom</Text>
              <Text style={{fontSize: 12}}>{num} members</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <Button transparent
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'private', anonymity: 'public', type: type})}
                    >
                  <Icon 
                  name='chevron-circle-right' 
                  type='FontAwesome' 
                  style={{fontSize: 30, color: 'black'}}/>
                </Button>
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
            <Title>Your Chatrooms</Title>
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
        {this.privateChatCard("Group TBD", 6, "Private")}
        {this.privateChatCard("EAS402 Group", 14, "Private")}
        {this.privateChatCard("Book Club Group", 20, "Public")}
        {this.privateChatCard("Saskatoon Group", 4, "Public")}
        {this.privateChatCard("Toronto Group", 6, "Public")}
        </ScrollView>
    </Container>
      </Container>
    )
  }
}

export default YourChatList

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
