import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Input, Icon, Segment, Content, Text, Card, CardItem, Title, Item} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts'
import { SearchBar } from 'react-native-elements'

let state = {
    showAlert: false,
    groups: [
      {name: "Group TBD",
      memberNum: 6,
      members: [
        {name: 'Jonathan',
        reported: false},
        {name: 'Mit',
        reported: false},
        {name: 'Felipe',
        reported: false},
        {name: 'Rae',
        reported: false},
        {name: 'Khori',
        reported: false},
        {name: 'Susan',
        reported: false}
      ],
      type: 'Private'
    },
      {name: "EAS402 Group",
      memberNum: 12,
      members: [
        {name: 'Paulina',
        reported: false},
        {name: 'Mika',
        reported: false},
        {name: 'Christy',
        reported: false},
        {name: 'Vivianne',
        reported: false},
        {name: 'Calvin',
        reported: false},
        {name: 'Mervin',
        reported: false},
        {name: 'Larry',
        reported: false},
        {name: 'Mike',
        reported: false},
        {name: 'Victoria',
        reported: false},
        {name: 'Nic',
        reported: false},
        {name: 'Toshimi',
        reported: false},
        {name: 'Susan',
        reported: false}
      ],
      type: 'Private'
    },
      {name: "Book Club Group",
      memberNum: 20,
      members: generateUsers(20),
      type: 'Public'
    },
      {name: "Saskatoon Group",
      memberNum: 6,
      members: [
        {name: 'Palima',
        reported: false},
        {name: 'Nikoo',
        reported: false},
        {name: 'Emily',
        reported: false},
        {name: 'Alyssa',
        reported: false},
        {name: 'Parker',
        reported: false},
        {name: 'Susan',
        reported: false},
        ],
      type: 'Private'
    },
      {name: "Toronto Group",
      memberNum: 8,
      members: generateUsers(8),
      type: 'Public'
    },
    ],
    search: [
      {name: "Group TBD",
      memberNum: 6,
      members: [
        {name: 'Jonathan',
        reported: false},
        {name: 'Mit',
        reported: false},
        {name: 'Felipe',
        reported: false},
        {name: 'Rae',
        reported: false},
        {name: 'Khori',
        reported: false},
        {name: 'Susan',
        reported: false}
      ],
      type: 'Private'
    },
      {name: "EAS402 Group",
      memberNum: 12,
      members: [
        {name: 'Paulina',
        reported: false},
        {name: 'Mika',
        reported: false},
        {name: 'Christy',
        reported: false},
        {name: 'Vivianne',
        reported: false},
        {name: 'Calvin',
        reported: false},
        {name: 'Mervin',
        reported: false},
        {name: 'Larry',
        reported: false},
        {name: 'Mike',
        reported: false},
        {name: 'Victoria',
        reported: false},
        {name: 'Nic',
        reported: false},
        {name: 'Toshimi',
        reported: false},
        {name: 'Susan',
        reported: false}
      ],
      type: 'Private'
    },
      {name: "Book Club Group",
      memberNum: 20,
      members: generateUsers(20),
      type: 'Public'
    },
      {name: "Saskatoon Group",
      memberNum: 6,
      members: [
        {name: 'Palima',
        reported: false},
        {name: 'Nikoo',
        reported: false},
        {name: 'Emily',
        reported: false},
        {name: 'Alyssa',
        reported: false},
        {name: 'Parker',
        reported: false},
        {name: 'Susan',
        reported: false},
        ],
      type: 'Private'
    },
      {name: "Toronto Group",
      memberNum: 8,
      members: generateUsers(8),
      type: 'Public'
    },
    ],
    delete: ''
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

class YourChatList extends Component {

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

  toDelete() {
    console.log(this.props.navigation.state.params)
    if (this.props.navigation.state.params) {
      return(
        this.setState({delete: this.props.navigation.state.params.delete})
      )
    }
  }

  privateChatCard(title, num, type, members) {
    let group = {}
    group.name = title
    group.memberNum = num
    group.members = members
    group.type = type
    return(
      <Card key={title}>
      <CardItem style={{ 
        alignItems: 'center'}} bordered>
        <Left>
        <Button transparent 
              onPress={() => {
                this.setState({delete: group, showAlert: true})}}
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 12}}>{type} chatroom</Text>
              <Text style={{fontSize: 12}}>{num} members</Text>
            </View>
            </Left>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <Button transparent
              onPress={() => this.props.navigation.navigate("ChatView", 
              {name: title, type: 'private', anonymity: 'public', type: type,
            members: members, page: 'YourChatList'})}
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

  chatList() {
    return(
      this.state.groups.map(group => {
        if (group.name !== this.state.delete) {
          return(
            this.privateChatCard(group.name, group.memberNum,
            group.type, group.members))
        }
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
            onPress={() => this.props.navigation.navigate("ChatHome")
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
          <Right />
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
      title={"Are you sure you want to delete \"" + this.state.delete.name + "\"?"}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText="No, cancel"
      confirmText="Yes, delete it"
      confirmButtonColor="#DD6B55"
      onCancelPressed={() => this.setState({showAlert: false})}
      onConfirmPressed={() => {
      const newGroups = this.state.groups.filter(group => {
        return group.name !== this.state.delete.name
         })
         this.setState({
           showAlert: false,
           groups: newGroups, search: newGroups
           })
      }}
      />
      </Container>
    )
  }
}

export default YourChatList

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
