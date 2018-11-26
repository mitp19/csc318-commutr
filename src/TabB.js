import React, { Component } from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  View,
  StyleSheet, Image
} from 'react-native'
import {
  Container, Header, Content, Card, CardItem,
  Text, Body, Button, Icon, Title, Left, Right, Item, Input
} from "native-base";
import Goals from "./commute/Goals";
import Alerts from "./commute/Alerts";

class TabB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showWhereAreYouGoing: true,
      showCommute: false,
      showAlerts: false,
      headed: "",
      startingLocation: "Current Location"
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Commute',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.bus}</FontAwesome>
  })

  handleWorkPress(startingLocation, destination) {
    let previousState = this.state
    this.setState({
      startingLocation: startingLocation,
      headed: destination,
      showCommute: !previousState.showCommute,
      showAlerts: !previousState.showAlerts,
      showWhereAreYouGoing: !previousState.showWhereAreYouGoing,
    });
  }

  handleEditGoingTo() {
    let previousState = this.state
    this.setState({
      headed: "",
      showCommute: !previousState.showCommute,
      showAlerts: !previousState.showAlerts,
      showWhereAreYouGoing: !previousState.showWhereAreYouGoing,
      goingTo: ""
    });
  }

  renderGoals() {
    return (
      <Goals />
    );
  }

  renderAlerts() {
    return (
      <Alerts />
    );
  }
  renderMap() {
    return (
      // <Container style={{ flex: 1, height: 700, bottom: 5, alignSelf: 'auto' }}>
      <Card>
        <CardItem header bordered>
          <Text>
            You are heading{"\n\n"}
            From: {this.state.startingLocation}{"\n\n"}
            To: {this.state.headed}
          </Text>
          <Right>
          <Button small onPress={() => { this.handleEditGoingTo() }}>
            <Icon style={{ marginRight: 0, marginLeft: 0, paddingRight: 7, paddingLeft: 7 }} name='edit'
              type='FontAwesome' />
          </Button>
          </Right>
        </CardItem>
        <CardItem>
          {this.renderAlerts()}
        </CardItem>
        <CardItem bordered >
            <Text> Route and Transfer Details</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={require('./assets/map.jpg')}
            style={{ flex: 1, height: 700, alignSelf: 'auto' }} />
        </CardItem>
      </Card>
      // </Container>
    );
  }


  renderWhereAreYouGoing() {
    return (
      <Card>
        <CardItem header bordered>
          <Text> Where are you going?</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
              <Button onPress={() => { this.handleWorkPress("Your Location", "Home") }} iconLeft>
                <Icon name='home' />
                <Text>Home</Text>
              </Button>
              <Button onPress={() => { this.handleWorkPress("Your Location", "Work") }} iconLeft primary style={{ left: 10 }}>
                <Icon name='briefcase' />
                <Text>Work</Text>
              </Button>
            </View>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body style={{ paddingBottom: 10 }}>
            <Text>Recent Destinations</Text>
            <Button onPress={() => { this.handleWorkPress("Your Location", "150 College St.")}} block style={{ top: 5 }}>
              <Text>150 College St.</Text>
            </Button>
            <Button onPress={() => { this.handleWorkPress("Your Location", "39 Sunflower Rd.") }} block style={{ top: 10 }}>
              <Text>39 Sunflower Rd.</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Item>
              
              <Input 
              onChangeText={(startingLocation) => this.setState({startingLocation})}
              placeholder='Enter Starting Location' />
            </Item>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Item>
              <Input placeholder='Enter New Destination'
               onChangeText={(goingTo) => this.setState({goingTo})}/>
              <Button 
                  onPress={() => {this.handleWorkPress(this.state.startingLocation, this.state.goingTo)} }
                  active 
                  transparent>
                      <Icon name='arrow-round-forward'/>
                  </Button>
              {/* <Icon active name='arrow-round-forward' /> */}
            </Item>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Container styles={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Commute</Title>
          </Body>
          <Right />
        </Header>
        {/* <Destination/> */}
        <Content padder>
          {this.state.showWhereAreYouGoing && this.renderWhereAreYouGoing()}
          {this.state.showCommute && this.renderMap()}
          {/* {this.state.showAlerts && this.renderAlerts()} */}
          {this.renderGoals()}
        </Content>
      </Container>
    );
  }
}

export default TabB

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#8e44ad',
    // padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
