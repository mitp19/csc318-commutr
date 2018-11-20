import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
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
      disabled: true,
      friendList: [
        {
          name: 'Jiayin',
          thumbnail: ''
      },
      {
        name: 'Jenni',
        thumbnail: ''
      }, 
        {
          name: 'Guohai',
          thumbnail: ''
        },
        {
          name: 'Ping',
          thumbnail: ''
        }
      ]
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  friendList() {
    return(
<Item stackedLabel>
<Label style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>Choose Friends to Add</Label>
<Card >
          <CardItem style = {{width: 360}}>
          <Thumbnail />
          <Text>
            Browse Public Chatrooms
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
  </Item>
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
            <Container style={{justifyContent: 'center', alignContent: 'center',
          padding: 10}}>
          <Form>
              <Item stackedLabel>
                <Label style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>
                Name of Chatroom
                </Label>
                <Input style={{fontSize: 14}} 
                onChangeText={(text) => {
                  let disabled = this.state.disabled;
                  if (text) {
                    if (this.state.selected === 'key0') {
                      disabled = false
                    }
                  } else {
                    disabled = true
                  }
                  this.setState({name: text, disabled: disabled})}}
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
            {this.state.selected === 'key1' && this.friendList()}
            
            </Form>
            <Content padder>
            <Button disabled={this.state.disabled} block>
              <Text>Create Chatroom!</Text>
            </Button>
            
            </Content>
            </Container>
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
