import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text, Card } from 'native-base';
import ForumCard from './social/ForumCard.js';
class TabD extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Social',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>

  })

  constructor(props) {
    super(props);
    this.firstpage = this.firstpage.bind(this);
    this.secondpage = this.secondpage.bind(this);
    this.state = {
      page: 1,
      firstpageactive: true,
      secondpageactive: false,

    }
  }
  firstpage() {
    this.setState({
      page: 1,
      firstpageactive: true,
      secondpageactive: false
    })
  }

  secondpage() {
    this.setState({
      page: 2,
      firstpageactive: false,
      secondpageactive: true
    })
  }

  forumView() {
    return (
    <View>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    <ForumCard> </ForumCard>
    </View>
    );

  }
  render() {
    const page = this.state.page ;
    let shows = null;
    if (page == 1 ){
      shows = this.forumView();
    } else if (page == 2) {
      shows = <Text> hello page 2 </Text>
    }
    return (
      <Container>
        <Header hasSegment>
          <Body>
            <Segment>
              <Button active={this.state.firstpageactive} onPress={this.firstpage}>
                <Text>Forum</Text>
              </Button>
              <Button active={this.state.secondpageactive} onPress={this.secondpage}>
                <Text>Chat</Text>
              </Button>
            </Segment>
          </Body>
        </Header>
        <Content padder>
          {shows}
         </Content>
      </Container>
    );
  }
}

export default TabD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
