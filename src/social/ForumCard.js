import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Card, 
  CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
Title, Segment} from 'native-base';

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

  renderForumCard() {
    return (
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
    );
  }


render() {
  return (
    <Container >
      <Header hasSegment>
      <Body>
          <Title>Social</Title>
        </Body>
      </Header>
          <Segment>
            <Button first active onPress={() => this.props.navigation.navigate("ForumCard")}>
              <Text>Forum</Text>
            </Button>
            <Button last onPress={() => this.props.navigation.navigate("ChatHome")}>
              <Text>Chat</Text>
            </Button>
          </Segment>
          <Container style={styles.container}>
            <Button onPress={() => this.props.navigation.navigate('CreatePost')}>
              <Text>
                New Post
              </Text>
            </Button>

          <Content>
            {this.renderForumCard()}
            {this.renderForumCard()}
            {this.renderForumCard()}
            {this.renderForumCard()}
            {this.renderForumCard()}
            {this.renderForumCard()}
          </Content>
    </Container>
       </Container>
  )
  }
}

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