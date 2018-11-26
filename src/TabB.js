import React, { Component } from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  View,
  StyleSheet, Image
} from 'react-native'
import {
  Container, Header, Content, Card, CardItem,
  Textarea, Text, Body, Button, Icon, Title, Left, Right, Item, Input
} from "native-base";
import Goals from "./commute/Goals";
import Alerts from "./commute/Alerts";
import Modal from 'react-native-modalbox'

class TabB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showWhereAreYouGoing: true,
      showCommute: false,
      showAlerts: false,
      headed: "",
      startingLocation: "Current Location",
      modalVisible: false,
      locationName: "",
      savedDestinations: [],
      locationAddress: ""
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

  handleAddLocation() {
    let previousState = this.state;
    if (previousState.locationName == "") {
      alert("Please enter a  location name");
      return;
    }
    else if (previousState.locationAddress == "") {
      return;
    } 
    else {
      let index = previousState.savedDestinations.length-1
      previousState.savedDestinations.push({index: index, name: previousState.locationName});
      this.setState({
        savedDestinations: previousState.savedDestinations,
        locationName: "",
        locationAddress: "",
        modalVisible: false
      });
    }

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
            <Icon type='FontAwesome' name='location-arrow' style={{ color: '#007aff', fontSize: 20 }}> </Icon> From: {this.state.startingLocation}{"\n\n "}
            <Icon type='FontAwesome' name='map-marker' style={{ color: '#007aff', fontSize: 20 }}> </Icon> To: {this.state.headed}
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

  renderLocations() {
    console.log(this.state.savedDestinations);
    let locationButtons = this.state.savedDestinations.map((item) =>
      <Button key={item.index} block style={{ marginBottom: 5 }} onPress={() => { this.handleWorkPress("Your Location", item.name) }} iconLeft>
        <Text> {item.name} </Text>
      </Button>
    )
    return (
      locationButtons
    );
  }

  // renderModal() {
  //   return (

  //   );
  // }

  renderWhereAreYouGoing() {
    return (
      <Card>
        <CardItem header bordered>
          <Text> Where are you going?</Text>
          <Right>
            <Button small transparent style={{ height: 40 }} onPress={() => { this.setState({ modalVisible: true }); this.refs.modal3.open() }}>
              <Text style={{ paddingRight: 0, textAlign: "center" }}> Add new{"\n"}location </Text>
              <Icon style={{ marginRight: 0, marginLeft: 0, paddingRight: 7, paddingLeft: 7 }} name='plus-circle'
                type='FontAwesome' />
            </Button>
          </Right>
        </CardItem>
        <Modal style={{
          padding: 15,
          height: 155, width: 300
        }} position={"center"}
          backdropPressToClose={true}
          ref={"modal3"} isDisabled={this.modalVisible}>

          <Text style={{ fontWeight: "bold" }}> Add a New Location</Text>
          <Textarea style={{ height: 30 }} rowSpan={8} bordered placeholder="Enter Name for Location" onChangeText={(text) => { this.setState({ locationName: text }) }} />
          <Textarea style={{ height: 30 }} rowSpan={8} bordered placeholder="Enter Address" onChangeText={(text) => { this.setState({ locationAddress: text }) }} />
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Button style={{ marginRight: 5 }} danger small onPress={() => this.refs.modal3.close()}>
              <Text> Close </Text>
            </Button>
            <Button small style={{ bgcolor: '#34ed46' }} onPress={() => { this.handleAddLocation(); this.refs.modal3.close()}}>
              <Text> Add </Text>
            </Button>
          </View>
        </Modal>
        <CardItem bordered>
          <Body>
            <Text style={{ marginBottom: 5 }}>Saved Destinations</Text>
            {/* <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}> */}
            <Button block style={{ marginBottom: 5 }} onPress={() => { this.handleWorkPress("Your Location", "Home") }} iconLeft>
              <Icon name='home' />
              <Text>Home</Text>
            </Button>
            <Button block style={{ marginBottom: 5 }} onPress={() => { this.handleWorkPress("Your Location", "Work") }} iconLeft>
              <Icon name='briefcase' />
              <Text>Work</Text>
            </Button>
            {this.renderLocations()}
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body style={{ paddingBottom: 5 }}>
            <Text style={{ marginBottom: 5 }}>Recent Destinations</Text>
            <Button onPress={() => { this.handleWorkPress("Your Location", "150 College St.") }} block style={{ marginBottom: 5 }}>
              <Text>150 College St.</Text>
            </Button>
            <Button onPress={() => { this.handleWorkPress("Your Location", "39 Sunflower Rd.") }} block style={{ marginBottom: 5 }}>
              <Text>39 Sunflower Rd.</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Item>

              <Input
                onChangeText={(startingLocation) => this.setState({ startingLocation })}
                placeholder='Enter Starting Location' />
            </Item>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Item>
              <Input placeholder='Enter New Destination'
                onChangeText={(goingTo) => this.setState({ goingTo })} />
              <Button
                onPress={() => { this.handleWorkPress(this.state.startingLocation, this.state.goingTo) }}
                active
                transparent>
                <Icon name='arrow-round-forward' />
              </Button>
              {/* <Icon active name='arrow-round-forward' /> */}
            </Item>
          </Body>
        </CardItem>
        {/* {this.renderModal()} */}
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
