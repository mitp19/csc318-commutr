import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, 
  Button, Icon, Segment, Content, Text, Card, CardItem, Title} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts'

class Members extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      user: {},
      members: this.props.navigation.state.params.members
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

  memberList() {
    return(
      this.state.members.map(member => {
        let buttonText;
        if (member.reported) {
          buttonText = "User reported"
          buttonColour = '#adadad'
        } else {
          buttonText = "Report user"
          buttonColour = "#ba2323"
        }
        return(
          <Card key={member.name}>
      <CardItem style={{ 
        alignItems: 'center'}} bordered>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{member.name}</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <Button danger disabled={member.reported}
              onPress={() => {
                this.setState({showAlert: true, user: member})
              }}
                    >
                  <Text>{buttonText}</Text>
                </Button>
              </Body>
          </CardItem>
        </Card>
        )
      })
    )
  }

  render() {
    return (
      <Container >
        <Header hasSegment>
        <Left>
        <Button transparent
            onPress={() => this.props.navigation.goBack(this.props.navigation.state.key)
            }  
            >
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title>Members of "{this.props.navigation.state.params.name}"</Title>
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
        {this.memberList()}
        </ScrollView>
    </Container>
    <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                title={"Are you sure you want to report " + this.state.user.name + "?"}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText={"Yes, I want to report " + this.state.user.name}
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showAlert: false})}
                onConfirmPressed={() => {
                  let newMembers = this.state.members
                  for (let i = 0; i < this.state.members.length; i++) {
                    if (this.state.members[i].name === this.state.user.name) {
                      newMembers[i].reported = true
                    }
                }
                  this.setState({showAlert: false, members: newMembers})}
                }
                />
      </Container>
    )
  }
}

export default Members

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
