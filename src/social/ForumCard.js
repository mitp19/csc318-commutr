import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ForumCard extends Component {
  constructor(props) {
    super(props);
    this.source = "https://dummyimage.com/300x200/000000/333333";
    this.likes = 12;
    this.comments = 3;
    this.user = "userA";
    this.thread = "TTCSucks"
  }

  // componentDidMount() {
  //   this.bind(this);
  // }

  render() {
    return (
      <View>
      <Container style={{height:360}}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.source}} />
                <Body>
                  <Text> {this.user} </Text>
                  <Text note> GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.source}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> {this.likes} Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text> {this.comments} Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>
    );
  }
}