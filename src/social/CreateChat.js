import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  List, ListItem, Thumbnail, Button, Icon, Segment, Content, Text, Card, CardItem, Title, Form, Item, Input,
Label, Picker} from 'native-base';

class CreateChat extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
    this.state = {
      selected: "key0",
      name: '',
      checkedNum: 0,
      friendList: [
        {
          name: 'Jiayin',
          checked: false,
        checkBox: 'checkbox-blank-outline',
        path: 'https://image.ibb.co/kdJRXA/Jiayin.jpg'
      },
      {
        name: 'Jenni',
        checked: false,
        checkBox: 'checkbox-blank-outline',
        path: 'https://image.ibb.co/ja29kV/Jenni.jpg'
      }, 
        {
          name: 'Guohai',
          checked: false,
         checkBox: 'checkbox-blank-outline',
         path: 'https://image.ibb.co/eibrzq/Guohai.jpg'
        },
        {
          name: 'Ping',
          checked: false,
        checkBox: 'checkbox-blank-outline',
        path: 'https://image.ibb.co/hhcaQV/Ping.jpg'
        }
      ],
      members: []
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  friendLoop() {
    this.state.friendList.map((friend) => {
      return(
        <Card key={friend.name}>
          <CardItem style = {{width: 360}}>
          <Thumbnail />
          <Text>
            {friend.name}
          </Text>
          <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <Button transparent>
          <Icon 
                  name='checkbox-blank-outline' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 30, color: 'black'}}/>
                  </Button>
                  </Body>
                  
          </CardItem>
        </Card>
        )
    })
  }

  itemLabel() {
    return(
      <Item>
       <Label style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>
                Add Friends to Join Chat
                </Label>
      </Item>
    )
  }

  isDisabled() {
    let disabled = true;
    if (this.state.name && this.state.selected === "key0") {
      disabled = false;
    } else if (this.state.name && this.state.selected == "key1") {
      if (this.state.checkedNum > 0) {
        disabled = false;
      }
    }
    return (
      disabled
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
            <Title>Create Chatroom</Title>
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
            <ScrollView keyboardShouldPersistTaps='always'>
            <Container style={{justifyContent: 'center', alignContent: 'center',
          padding: 10}}>
          <Form>
              <Item stackedLabel>
                <Label style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>
                Name of Chatroom
                </Label>
                <Input style={{fontSize: 14}} 
                onChangeText={(text) => {
                  this.setState({name: text})}}
                placeholder={"Enter name"}/>
              </Item>
              <Item stackedLabel>
              <Label style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>
              Type of Chatroom
              </Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select Type of Chatroom"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Public" value="key0" />
                <Picker.Item label="Private" value="key1" />
              </Picker>
            </Item>
            {this.state.selected === "key1" && this.itemLabel()}
            {this.state.selected === "key1" && (
              this.state.friendList.map((friend) => {
                let index = 0;
                    for (let i = 0; i < this.state.friendList.length; i++) {
                      if (this.state.friendList[i].name === friend.name) {
                        index = i;
                      }
                    }
              return(
                <Card key={friend.name}>
                  <CardItem style = {{width: 360}}>
                  <Left>
                  <Thumbnail source={{uri: friend.path}}/>
                  </Left>
                  <Text>
                    {friend.name}
                  </Text>
                  <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
                  <Button transparent 
                  onPress={() => {
                    let members = this.state.members
                    let newFriends = this.state.friendList
                    let num = this.state.checkedNum
                    if (this.state.friendList[index].checked) {
                      newFriends[index].checked = false
                      newFriends[index].checkBox = 'checkbox-blank-outline'
                      num = num - 1
                      if (members !== []) {
                        members = this.state.members.filter(friend => {
                          return friend.name !== newFriends[index].name
                        })
                      }
                    } else {
                      newFriends[index].checked = true
                      newFriends[index].checkBox = 'checkbox-marked'
                      num = num + 1
                      let newMember = {}
                      newMember.name = newFriends[index].name
                      newMember.reported = false
                      members.push(newMember)
                    }
                    this.setState({checkedNum: num, friendList: newFriends,
                    members: members})
                  }}>
                  <Icon 
                          name={this.state.friendList[index].checkBox} 
                          type='MaterialCommunityIcons' 
                          style={{fontSize: 30, color: 'black'}}/>
                          </Button>
                          </Body>
                          
                  </CardItem>
                </Card>
                )
            })
            )
            }
            </Form>
            <Content padder>
            <Button disabled={this.isDisabled()} block
            onPress={() => {
              let type;
              if (this.state.selected === 'key0') {
                type = 'Public'
              } else {
                type = 'Private'
              }
              this.props.navigation.navigate("ChatView", {name: this.state.name,
                anonymity: "public", type: type, members: this.state.members, page: 'CreateChat'})
            }
            }>
              <Text>Create Chatroom!</Text>
            </Button>
            </Content>
            </Container>
            </ScrollView>
      </Container>
    )
  }
}

export default CreateChat

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
