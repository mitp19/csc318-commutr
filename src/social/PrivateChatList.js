import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Icon, Segment, Content, Text, Card, CardItem, Title} from 'native-base';

class PrivateChatList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
  }

  privateChatCard(title, num) {
    return(
      <Card>
      <CardItem style={{ 
        alignItems: 'center'}} bordered>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 12}}>{num} members</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <Button transparent
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'private', anonymity: 'public'})}
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
            <Title>Your Private Chatrooms</Title>
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
        {this.privateChatCard("Group TBD", 6)}
        {this.privateChatCard("EAS402 Group", 14)}
        {this.privateChatCard("Book Club Group", 20)}
        {this.privateChatCard("Saskatoon Group", 4)}
        {this.privateChatCard("Toronto Group", 6)}
    </Container>
      </Container>
    )
  }
}

export default PrivateChatList

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
