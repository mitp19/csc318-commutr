import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Item, Icon, Input, Segment, Content, Text, Card, CardItem, Title} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts'

let state = {
  showAlert: false,
  groups: [
    {name: "TTC Haters Club",
    memberNum: 15,
    members: generateUsers(15),
    type: 'Public',
    disabled: false
  },
    {name: "Sleep Deprived Club",
    memberNum: 20,
    members: generateUsers(20),
    type: 'Public',
    disabled: false
  },
    {name: "Sleeping is For Losers",
    memberNum: 8,
    members: generateUsers(8),
    type: 'Private',
    disabled: false
  },
    {name: "I'm Bored Chat",
    memberNum: 7,
    members: generateUsers(7),
    type: 'Public',
    disabled: false
  },
    {name: "Chaotic Chatroom :)",
    memberNum: 18,
    members: generateUsers(18),
    type: 'Public',
    disabled: false
  },
    {name: "When Will School be Over?",
    memberNum: 4,
    members: generateUsers(4),
    type: 'Private',
    disabled: false
  },
    {name: "Christmas is Coming!!",
    memberNum: 5,
    members: generateUsers(5),
    type: 'Public',
    disabled: false
  }
  ],
  search: [
    {name: "TTC Haters Club",
    memberNum: 15,
    members: generateUsers(15),
    type: 'Public',
    disabled: false
  },
    {name: "Sleep Deprived Club",
    memberNum: 20,
    members: generateUsers(20),
    type: 'Public',
    disabled: false
  },
    {name: "Sleeping is For Losers",
    memberNum: 8,
    members: generateUsers(8),
    type: 'Private',
    disabled: false
  },
    {name: "I'm Bored Chat",
    memberNum: 7,
    members: generateUsers(7),
    type: 'Public',
    disabled: false
  },
    {name: "Chaotic Chatroom :)",
    memberNum: 18,
    members: generateUsers(18),
    type: 'Public',
    disabled: false
  },
    {name: "When Will School be Over?",
    memberNum: 4,
    members: generateUsers(4),
    type: 'Private',
    disabled: false
  },
    {name: "Christmas is Coming!!",
    memberNum: 5,
    members: generateUsers(5),
    type: 'Public',
    disabled: false
  }
  ],
  groupRequest: ''
}

function generateUsers(num) {
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

class ChatList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
    this.state = state;
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  chatCard(title, num, members, type) {
    if (type === 'Public') {
      return(
        <Card key={title}>
        <CardItem style={{height: 90, justifyContent: 'center' ,alignContent: 'center'}} bordered>
              <View>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{fontSize: 12}}>{type} chatroom</Text>
                <Text style={{fontSize: 11}}>{num} members</Text>
              </View>
              <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <View>
              <Body style={{justifyContent: "center"}}>
                <Button dark small rounded
                onPress={() => this.props.navigation.navigate("ChatView", 
                {name: title, type: 'public', anonymity: 'anonymous', type: 'Public', 
              members: members, page: 'ChatList'})}
                      >
                    <Text style={{fontSize: 10}}>Join Anonymously</Text>
                  </Button>
                </Body>
                <Body style={{justifyContent: "center"}}>
                <Button rounded success small
                onPress={() => this.props.navigation.navigate("ChatView", 
                {name: title, type: 'public', anonymity: 'public', type: 'Public',
              members: members, page: 'ChatList'})}
                      >
                    <Text style={{fontSize: 10}}>Join as Public User</Text>
                  </Button>
                </Body>
                </View>
                </Body>
            </CardItem>
      </Card>
      )
    } else if (type === 'Private') {
      let index = 0
      for (let i = 0; i < this.state.groups.length; i++) {
        if (this.state.groups[i].name === title) {
          index = i
        }
      }
      let buttonText;
      if (this.state.groups[index].disabled) {
        buttonText = 'Request Sent'
      } else {
        buttonText = 'Request to Join'
      }
      return (
        <Card key={title}>
        <CardItem style={{height: 90, justifyContent: 'center' ,alignContent: 'center'}} bordered>
              <View>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{fontSize: 12}}>{type} chatroom</Text>
                <Text style={{fontSize: 11}}>{num} members</Text>
              </View>
              <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <View>
              <Body style={{justifyContent: "center"}}>
                
                <Button info small rounded disabled={this.state.groups[index].disabled}
                onPress={() => {this.setState({showAlert: true, groupRequest: this.state.groups[index]})
                }}
                      >
                    <Text style={{fontSize: 11}}>{buttonText}</Text>
                  </Button>   
                </Body>
                </View>
                </Body>
            </CardItem>
      </Card>
      )
    }
  }

  chatList() {
    return(
      this.state.groups.map(group => {
        return(
          this.chatCard(group.name, group.memberNum, group.members, group.type))
      })
    )
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container >
        <Header hasSegment searchBar rounded>
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
            <Title>Browse Chatrooms</Title>
          </Body>
          <Right/>
          <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={(text) =>
             {const newList = this.state.search.filter(group => {
                return group.name.toUpperCase().includes(text.toUpperCase())
              })
              this.setState({
                groups: newList
              })}}/>
        </Item>
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
          <Content padder>
        {this.chatList()}
        </Content>
        </ScrollView>
    </Container>
    <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                title="Are you sure?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, I'm sure"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showAlert: false})}
                onConfirmPressed={() => {
                  let newGroups = this.state.groups
                  for (let i = 0; i < this.state.groups.length; i++) {
                    if (this.state.groups[i].name === this.state.groupRequest.name) {
                      newGroups[i].disabled = true
                    }
                }
                  this.setState({showAlert: false, groups: newGroups, search: newGroups})}
                }
                />
      </Container>
    )
  }
}

export default ChatList

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
        backgroundColor: '#26365e'},
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
