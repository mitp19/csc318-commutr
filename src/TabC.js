import React, { Component } from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  Container, Header, Content, Card, CardItem,
  Text, Body, Button, Icon, Title, Left, Right, Item, Input, Thumbnail
} from "native-base";

class TabC extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 30, color: tintColor }}>{Icons.home}</FontAwesome>
  })

  render() {
    return (
      <Container styles={styles.container}>
        <Header style={{color: '#81c800'}}>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

        {/* Commute card */}

          <Card>
            <CardItem header bordered>
              <Text style={{fontSize:30}}> Commute</Text>

              <Button iconLeft transparent
              onPress={() =>
                this.props.navigation.navigate('TabB')
              }>

                <Icon name='arrow-forward' style={{fontSize:30}}/>
              </Button>
            </CardItem>
            <CardItem>
            </CardItem>

            <CardItem bordered>
              <Text>You are heading ...</Text>
            </CardItem>

            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 20}}>Home</Text> 
                  <Right>
                    <Button iconLeft
                    onPress={() =>
                      this.props.navigation.navigate('TabB')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                      <Text style={{fontSize: 10}}>Change</Text>
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>

            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 15}}>
                    Arrival at
                  </Text>
                  <Text style={{fontSize: 20}}>
                    {"\n"}9:17am
                  </Text>
                </View>
              </Body>
            </CardItem>

            <CardItem bordered>
              <Body>
              <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{color:'#afafaf'}}>
                    No delays
                  </Text>
                  <Right>
                    <Button iconLeft transparent onPress={() =>
                    this.props.navigation.navigate('TabB')
                  }>
                      <Icon name='chevron-circle-right' type='FontAwesome'/>
                      <Text>
                        See More Info
                      </Text>

                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>

            <CardItem>
              <Button block onPress={() =>
                    this.props.navigation.navigate('TabB')
                  }>
                <Text>See All Goals</Text>
              </Button>
            </CardItem>
          </Card>

        {/* Media Card */}
          <Card>
            <CardItem header bordered>
              <Text style={{fontSize:30}}>Media</Text>
              <Button iconLeft transparent onPress={() =>
                    this.props.navigation.navigate('TabA')
                  }>
                <Icon name='arrow-forward' style={{fontSize:30}}/>
              </Button>
            </CardItem>

            <CardItem bordered>
              <Text style={{fontSize: 15}}>Recent Media</Text>
            </CardItem>

            <CardItem>
              
              <Thumbnail source={{uri: "https://dummyimage.com/300x200/000000/333333"}}/>
                <Body>
                {/* <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}> */}
                  <Text style={{fontSize:20, left :15}}>Out Of Your League </Text>
                  <Text note style={{left :15}}>Blood Orange</Text>
                {/* </View> */}
                </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  
                    <Button style={{left:15}}
                    onPress={() =>
                      this.props.navigation.navigate('PlaceHolderMusicPodcast', {title:'Out Of My League' , artist:'Blood Orange'})
                    }>
                      <Text style={{fontSize: 10}}>Resume</Text>
                    </Button>

                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:25}}>View All Downloads</Text>
                  <Right>
                    <Button iconLeft transparent
                    onPress={() =>
                      this.props.navigation.navigate('Downloads')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          {/* Social Tab  */}
          <Card>
            <CardItem header bordered>
              <Text style={{fontSize:30}}>Social</Text>
              <Button iconLeft transparent
              onPress={() =>
                this.props.navigation.navigate('ForumCard')
              }>
                <Icon name='arrow-forward' style={{fontSize:30}}/>
              </Button>
            </CardItem>

            <CardItem >
              <Text style={{fontSize: 15}}>Forum</Text>
            </CardItem>

            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:25}}>Go To Your Feed</Text>
                  <Right>
                    <Button iconLeft transparent
                    onPress={() =>
                      this.props.navigation.navigate('ForumCard')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                    <Button onPress={() =>
                    this.props.navigation.navigate('ForumCard')
                  }>
                      <Text style={{fontSize:20}}>+ Create New Post</Text>
                    </Button>
                  
                </View>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{fontSize: 15}}>Chat</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:25}}>Browse Public Chatrooms</Text>
                  <Right>
                    <Button iconLeft transparent
                    onPress={() =>
                      this.props.navigation.navigate('PublicChatList')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
            


          </Card>

          {/* Canvas AR Card */}
          <Card>
            <CardItem header bordered>
              <Text style={{fontSize:30}}>Canvas AR</Text>
              <Button iconLeft transparent
              onPress={() =>
                this.props.navigation.navigate('TabE')
              }>
                <Icon name='arrow-forward' style={{fontSize:30}}/>
              </Button>
            </CardItem>

            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:25}}>+ Create New Post</Text>
                  <Right>
                    <Button iconLeft transparent
                    onPress={() =>
                      this.props.navigation.navigate('TabE')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:25}}>View Saved Gallery</Text>
                  <Right>
                    <Button iconLeft transparent
                    onPress={() =>
                      this.props.navigation.navigate('TabE')
                    }>
                      <Icon name='chevron-circle-right' 
                  type='FontAwesome' style={{fontSize:30}} />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default TabC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#81c800',
    // padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
