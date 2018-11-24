import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { StyleSheet, Alert, Platform} from 'react-native'
import { Container, Header, Content, Card, Form,
  CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Textarea,
Title, Segment, Tabs, Tab} from 'native-base';
import { SearchBar } from 'react-native-elements'
import AwesomeAlert from 'react-native-awesome-alerts'
import Modal from 'react-native-modalbox'


export default class ForumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      createPost: false,
      modalVisible: false,
      showDeleteAlert: false,
      feed: [
        {key: 0,
        type: "Your Feed",
        source: "https://image.ibb.co/jWuXsA/pancakes.jpg",
        reported: false,
        follow: "user-minus",
        time: '11h ago',
        height: 300,
        likes: 12,
        likeButton: 'thumbs-o-up',
        commentNum: 3,
        thumbnail: 'https://image.ibb.co/hhcaQV/Ping.jpg',
        user: "Ping",
        text: "Hanabusa Cafe is my favourite place to get Japanese pancakes! So fluffy and delicious! If you're ever in Kensington Market, go check this place out!"
      },
        {key: 1,
        type: "Your Feed",
        source: "https://image.ibb.co/fBDYXA/IMG-2433.jpg",
        reported: false,
        follow: "user-minus",
        time: '14h ago',
        height: 300,
        likes: 8,
        likeButton: 'thumbs-o-up',
        commentNum: 2,
        thumbnail: "https://image.ibb.co/eibrzq/Guohai.jpg",
        user: "Guohai",
        text: "After I got off the subway station, I saw this beautiful red clover and I thought I would share it with you all. :) Hope everyone has a wonderful day!"
      },
        {key: 2,
        type: "Your Feed",
        source: "https://image.ibb.co/fqvrKq/book.jpg",
        reported: false,
        follow: "user-minus",
        time: '1 day ago',
        height: 300,
        likes: 5,
        likeButton: 'thumbs-o-up',
        commentNum: 1,
        thumbnail: "https://image.ibb.co/kdJRXA/Jiayin.jpg",
        user: "Jiayin",
        text: "Spent some quality time today on the subway reading! I recommend anyone who likes heartwarming stories to read \"A Gentleman in Moscow\" -- you won't be sorry!"
      },
        {key: 3,
        type: "Your Feed",
        source: "https://image.ibb.co/n4k0eq/IMG-1922.jpg",
        reported: false,
        follow: "user-minus",
        time: '2 days ago',
        height: 350,
        likes: 20,
        likeButton: 'thumbs-o-up',
        commentNum: 3,
        thumbnail: "https://image.ibb.co/ja29kV/Jenni.jpg",
        user: "Jenni",
        text: 'Boba Guys is the best!!'
      },
        {key: 4,
        type: "Your Feed",
        source: "https://image.ibb.co/fArj5V/IMG-1979.jpg",
        reported: false,
        follow: "user-minus",
        time: '3 days ago',
        height: 400,
        likes: 8,
        likeButton: 'thumbs-o-up',
        commentNum: 0,
        thumbnail: "https://image.ibb.co/kdJRXA/Jiayin.jpg",
        user: "Jiayin",
        text: 'Visited a random book store and the ceiling there is awesome! I want my ceiling in my room to be like that! :D'
      }
      ],
      searchFeed: [
        {key: 0,
        type: "Your Feed",
        source: "https://image.ibb.co/jWuXsA/pancakes.jpg",
        reported: false,
        follow: "user-minus",
        time: '11h ago',
        height: 300,
        likes: 12,
        likeButton: 'thumbs-o-up',
        commentNum: 3,
        thumbnail: 'https://image.ibb.co/hhcaQV/Ping.jpg',
        user: "Ping",
        text: "Hanabusa Cafe is my favourite place to get Japanese pancakes! So fluffy and delicious! If you're ever in Kensington Market, go check this place out!"
      },
        {key: 1,
        type: "Your Feed",
        source: "https://image.ibb.co/fBDYXA/IMG-2433.jpg",
        reported: false,
        follow: "user-minus",
        time: '14h ago',
        height: 300,
        likes: 8,
        likeButton: 'thumbs-o-up',
        commentNum: 2,
        thumbnail: "https://image.ibb.co/eibrzq/Guohai.jpg",
        user: "Guohai",
        text: "After I got off the subway station, I saw this beautiful red clover and I thought I would share it with you all. :) Hope everyone has a wonderful day!"
      },
        {key: 2,
        type: "Your Feed",
        source: "https://image.ibb.co/fqvrKq/book.jpg",
        reported: false,
        follow: "user-minus",
        time: '1 day ago',
        height: 300,
        likes: 5,
        likeButton: 'thumbs-o-up',
        commentNum: 1,
        thumbnail: "https://image.ibb.co/kdJRXA/Jiayin.jpg",
        user: "Jiayin",
        text: "Spent some quality time today on the subway reading! I recommend anyone who likes heartwarming stories to read \"A Gentleman in Moscow\" -- you won't be sorry!"
      },
        {key: 3,
        type: "Your Feed",
        source: "https://image.ibb.co/n4k0eq/IMG-1922.jpg",
        reported: false,
        follow: "user-minus",
        time: '2 days ago',
        height: 350,
        likes: 20,
        likeButton: 'thumbs-o-up',
        commentNum: 3,
        thumbnail: "https://image.ibb.co/ja29kV/Jenni.jpg",
        user: "Jenni",
        text: 'Boba Guys is the best!!'
      },
        {key: 4,
        type: "Your Feed",
        source: "https://image.ibb.co/fArj5V/IMG-1979.jpg",
        reported: false,
        follow: "user-minus",
        time: '3 days ago',
        height: 400,
        likes: 8,
        likeButton: 'thumbs-o-up',
        commentNum: 0,
        thumbnail: "https://image.ibb.co/kdJRXA/Jiayin.jpg",
        user: "Jiayin",
        text: 'Visited a random book store and the ceiling there is awesome! I want my ceiling in my room to be like that! :D'
      }
      ],
      trending: [
        {key: 0,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '2 hours ago',
        height: 300,
        likes: 100,
        likeButton: 'thumbs-o-up',
        commentNum: 50,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User1",
        text: ''
      },
      {key: 1,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '4 hours ago',
        height: 300,
        likes: 110,
        likeButton: 'thumbs-o-up',
        commentNum: 20,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User2",
        text: ''
      },
      {key: 2,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '1 day ago',
        height: 300,
        likes: 300,
        likeButton: 'thumbs-o-up',
        commentNum: 88,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User3",
        text: ''
      },
      {key: 3,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '2 days ago',
        height: 300,
        likes: 230,
        likeButton: 'thumbs-o-up',
        commentNum: 60,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User4",
        text: ''
      },
      {key: 4,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '4 days ago',
        height: 300,
        likes: 350,
        likeButton: 'thumbs-o-up',
        commentNum: 77,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User5",
        text: ''
      }
      ],
      trendingSearch: [
        {key: 0,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '2 hours ago',
        height: 300,
        likes: 100,
        likeButton: 'thumbs-o-up',
        commentNum: 50,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User1",
        text: ''
      },
      {key: 1,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '4 hours ago',
        height: 300,
        likes: 110,
        likeButton: 'thumbs-o-up',
        commentNum: 20,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User2",
        text: ''
      },
      {key: 2,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '1 day ago',
        height: 300,
        likes: 300,
        likeButton: 'thumbs-o-up',
        commentNum: 88,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User3",
        text: ''
      },
      {key: 3,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '2 days ago',
        height: 300,
        likes: 230,
        likeButton: 'thumbs-o-up',
        commentNum: 60,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User4",
        text: ''
      },
      {key: 4,
        type: "Trending",
        source: "https://dummyimage.com/300x200/000000/333333",
        reported: false,
        follow: "user-plus",
        time: '4 days ago',
        height: 300,
        likes: 350,
        likeButton: 'thumbs-o-up',
        commentNum: 77,
        thumbnail: "https://dummyimage.com/300x200/000000/333333",
        user: "User5",
        text: ''
      }
      ],
      yourPosts: [],
      searchYourPosts: [],
      text: '',
      reportPost: {},
      deletePost: {},
      newPost: {},
      key: 0
    }
  }

  renderYourPost(post) {
    let key
    let index = 0
    for (let i = 0; i < this.state.yourPosts.length; i++) {
      if (this.state.yourPosts[i].time === post.time) {
        key = this.state.yourPosts[i].key
        index = i
      }
    }
    return(
      <Card key={post.time}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{uri: "https://image.ibb.co/f8mOFV/Screen-Shot-2015-12-01-at-1-21-33-PM.png"}} />
                <Body >
                <Body style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: "bold"}}>You</Text>
                  <Text>{" posted:"}</Text>
                </Body>
                </Body>
              </Left>
              <Right>
                <Button small dark 
                onPress = {() => {
                  this.setState({showDeleteAlert: true, deletePost: post})
                }}
                >
                  <Text>
                    Delete
                  </Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem bordered>
            <Text style={{fontSize: 12}}>{post.text}</Text>
            </CardItem>
            <CardItem bordered>
              <Left>
              <Button transparent onPress={() => {
                let newFeed = this.state.yourPosts
                    if (post.likeButton == 'thumbs-o-up') {
                      newFeed[index].likeButton = 'thumbs-up'
                      newFeed[index].likes++
                    } else {
                      newFeed[index].likeButton = 'thumbs-o-up'
                      newFeed[index].likes--
                    }
                
                this.setState({yourPosts: newFeed, searchYourPosts: newFeed})
                }}>
                  <Icon active name={this.state.yourPosts[index].likeButton} type="FontAwesome"/>
                  <Text>{this.state.yourPosts[index].likes}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="comment-multiple" type="MaterialCommunityIcons"/>
                  <Text>{post.commentNum} Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>{post.time}</Text>
              </Right>
            </CardItem>
          </Card>
    )
  }

  renderForumCard(post) {
    let index = 0
    let reportText;
    let currPost;
    if (post.type === "Your Feed") {
      for (let i = 0; i < this.state.feed.length; i++) {
        if (this.state.feed[i].source === post.source && 
          this.state.feed[i].user === post.user) {
          index = i;
          currPost = this.state.feed[index]
        }}
        if (this.state.feed[index].reported) {
          reportText = 'Post Reported'
        } else {
          reportText = 'Report Post'
        } 
    } else {
      for (let i = 0; i < this.state.trending.length; i++) {
        if (this.state.trending[i].key === post.key ) {
          index = i;
          currPost = this.state.trending[index]
        }}
        if (this.state.trending[index].reported) {
          reportText = 'Post Reported'
        } else {
          reportText = 'Report Post'
        } 
    }
    let followText;
    let colour;
    if (post.follow === 'user-plus') {
      followText = 'Follow'
      colour = 'green'
    } else {
      followText = 'Unfollow'
      colour = '#808080'
    }
    
    return (
          <Card key={post.source + post.user}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{uri: post.thumbnail}} />
                <Body >
                <Body style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: "bold"}}>{post.user}</Text>
                  <Text>{" posted:"}</Text>
                </Body>
                <Button iconLeft small transparent rounded bordered dark
                onPress={() => {
                  let newFeed;
                  if (post.type === "Your Feed") {
                    newFeed = this.state.feed
                  } else {
                    newFeed = this.state.trending
                  }
                  
                  for (let i = 0; i < newFeed.length; i++) {
                    if (newFeed[i].user === post.user) {
                        if (newFeed[i].follow === 'user-minus') {
                          newFeed[i].follow = 'user-plus'
                        } else {
                          newFeed[i].follow = 'user-minus'
                        }
                    }
                  }
                  if (post.type === "Your Feed") {
                    this.setState({feed: newFeed, searchFeed: newFeed})
                  } else {
                    this.setState({trending: newFeed, trendingSearch: newFeed})
                  }
                }}>
                <Icon style={{fontSize: 18, color: colour}} name={post.follow} type="Feather"/>
                <Text style={{color: colour, fontSize: 12}}>{followText}</Text>
                </Button>
                </Body>
              </Left>
              <Right>
                <Button small danger disabled={post.reported}
                onPress = {() => {
                  this.setState({showAlert: true, reportPost: post})
                }}
                >
                  <Text>
                    {reportText}
                  </Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody bordered>
              <Image source={{uri: post.source}} style={{height: post.height, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered>
            <Text style={{fontSize: 12}}>{post.text}</Text>
            </CardItem>
            <CardItem bordered>
              <Left>
              <Button transparent onPress={() => {
                if (post.type === "Your Feed") {
                  let newFeed = this.state.feed
                  if (newFeed[index].liked) {
                    newFeed[index].likes--
                    newFeed[index].liked = false
                    newFeed[index].likeButton = 'thumbs-o-up'
                  } else {
                      newFeed[index].likes++
                      newFeed[index].liked = true
                      newFeed[index].likeButton = 'thumbs-up'
                  }
                  this.setState({feed: newFeed})
                } else {
                  let newFeed = this.state.trending
                  if (newFeed[index].liked) {
                    newFeed[index].likes--
                    newFeed[index].liked = false
                    newFeed[index].likeButton = 'thumbs-o-up'
                  } else {
                      newFeed[index].likes++
                      newFeed[index].liked = true
                      newFeed[index].likeButton = 'thumbs-up'
                  }
                  this.setState({trending: newFeed, trendingSearch: newFeed})
                }
                  }}>
                  <Icon active name={currPost.likeButton} type="FontAwesome"/>
                  <Text>{post.likes}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="comment-multiple" type="MaterialCommunityIcons"/>
                  <Text>{post.commentNum} Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>{post.time}</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }

render() {
  return (
    <Container>
      <Header hasTabs hasSegment>
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
          <Tabs>
          <Tab heading="Your Feed">
          <Container style={styles.container}>
          <View style={{flexDirection: "row", alignItems: "center", alignContent: "center",
          justifyContent: "space-between"}}>
          <Left>
          <Button small onPress={() => {this.setState({modalVisible: true})
            this.refs.modal3.open()}}>
              <Text>Create New Post</Text></Button>
            </Left>
            <Right>
            <SearchBar 
            round
            placeholder="Search" inputStyle={{backgroundColor: "white", height: 30, fontSize: 14}}
            containerStyle={{backgroundColor: "transparent", width: 180, borderBottomColor: 'transparent',
            borderTopColor: 'transparent'}}
            onChangeText={(text) =>
              {const newFeed = this.state.searchFeed.filter(post => {
                 return post.user.toUpperCase().includes(text.toUpperCase()) || 
                 post.text.toUpperCase().includes(text.toUpperCase())
               })
               const newYourPosts = this.state.searchYourPosts.filter(post => {
                return post.user.toUpperCase().includes(text.toUpperCase()) || 
                post.text.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 feed: newFeed, yourPosts: newYourPosts
               })}}
            />
            </Right>
            </View>
          <Content>
          {this.state.yourPosts.map(post => this.renderYourPost(post))}
          {this.state.feed.map(post => this.renderForumCard(post))}
          </Content>
          </Container>
          </Tab>
          <Tab heading="Trending">
          <Container style={styles.container}>
          <View style={{flexDirection: "row", alignItems: "center", alignContent: "center",
          justifyContent: "space-between"}}>
          <Left>
          <Button small onPress={() => {this.setState({modalVisible: true})
            this.refs.modal3.open()}}>
              <Text>Create New Post</Text>
            </Button>
            </Left>
            <Right>
            <SearchBar 
            round
            placeholder="Search" inputStyle={{backgroundColor: "white", height: 30, fontSize: 14}}
            containerStyle={{backgroundColor: "transparent", width: 180, borderBottomColor: 'transparent',
            borderTopColor: 'transparent'}}
            onChangeText={(text) =>
              {const newTrending = this.state.trendingSearch.filter(post => {
                 return post.user.toUpperCase().includes(text.toUpperCase()) || 
                 post.text.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 trending: newTrending
               })}}
            />
            </Right>
            </View>
          <Content>
          {this.state.trending.map(post => this.renderForumCard(post))}
          </Content>
          </Container>
          </Tab>
          <Tab heading="New">
          <Container style={styles.container}>
          <View style={{flexDirection: "row", alignItems: "center", alignContent: "center",
          justifyContent: "space-between"}}>
          <Left>
          <Button small onPress={() => {this.setState({modalVisible: true})
            this.refs.modal3.open()}}>
              <Text>Create New Post</Text>
            </Button>
            </Left>
            <Right>
            <SearchBar 
            round
            placeholder="Search" inputStyle={{backgroundColor: "white", height: 30, fontSize: 14}}
            containerStyle={{backgroundColor: "transparent", width: 180, borderBottomColor: 'transparent',
            borderTopColor: 'transparent'}}
            onChangeText={(text) =>
              {const newTrending = this.state.trendingSearch.filter(post => {
                 return post.user.toUpperCase().includes(text.toUpperCase()) || 
                 post.text.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 trending: newTrending
               })}}
            />
            </Right>
            </View>
          <Content>
          {this.state.trending.map(post => this.renderForumCard(post))}
          </Content>
          </Container>
          </Tab>
        </Tabs>
        <AwesomeAlert
                show={this.state.showDeleteAlert}
                showProgress={false}
                title="Are you sure?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText={"Yes, I'm sure"}
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showDeleteAlert: false})}
                onConfirmPressed={() => {
                  let newFeed = this.state.yourPosts
                  for (let i = 0; i < this.state.yourPosts.length; i++) {
                    if (this.state.yourPosts[i].key === this.state.deletePost.key) {
                      newFeed = this.state.yourPosts.filter(post => {
                        return post.time !== this.state.deletePost.time
                      })
                      this.setState({showDeleteAlert: false, yourPosts: newFeed})
                    }}}}
                />
        <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                title="Are you sure?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText={"Yes, I'm sure"}
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showAlert: false})}
                onConfirmPressed={() => {
                  let newFeed;
                  if (this.state.reportPost.type === "Your Feed") {
                    for (let i = 0; i < this.state.feed.length; i++) {
                      if (this.state.feed[i].source === this.state.reportPost.source) {
                        newFeed = this.state.feed
                        newFeed[i].reported = true
                        this.setState({showAlert: false, feed: newFeed})
                      }}
                  } else {
                    for (let i = 0; i < this.state.trending.length; i++) {
                      if (this.state.trending[i].user === this.state.reportPost.user) {
                        newFeed = this.state.trending
                        newFeed[i].reported = true
                        this.setState({showAlert: false, trending: newFeed})
                      }}
                  }}
                }
                />
          <Modal style={{
            padding: 15,
            height: 300, width: 300
            }} position={"center"} 
            backdropPressToClose={false}
          ref={"modal3"} isDisabled={this.modalVisible}>
          
          <Text style={{fontWeight: "bold"}}>Create New Post</Text>
          <Textarea rowSpan={8} bordered placeholder="Type away!" onChangeText={(text) =>
          {
            this.setState({text: text})
            }}/>
          <View style={{ flexDirection: "row"}}>
          <Left>
            <View style={{ flexDirection: "row"}}>
                    <Button transparent>
                        <Icon name='link'/>
                    </Button>
                    <Button transparent>
                        <Icon name='camera'/>
                    </Button>
                    </View>
                    </Left>
                    <Right>
                      <View style={{ flexDirection: "row"}}>
                      <Button danger small onPress={()=>this.refs.modal3.close()}>
                        <Text>Cancel</Text>
                      </Button>
                    <Button small style={{bgcolor:'#34ed46'}}
                    onPress={() => {
                      if (!this.state.text) {
                        Alert.alert(
                          'Error!',
                          'You have to write something!',
                          [
                            {text: 'OK'},
                          ],
                          { cancelable: false }
                        )
                      } else {
                        let newFeed = this.state.yourPosts
                        let d = new Date();
                        let hours = d.getHours();
                        let minutes = d.getMinutes();
                        let seconds = d.getSeconds();
                        let ampm = hours >= 12 ? 'pm' : 'am';
                        hours = hours % 12;
                        hours = hours ? hours : 12; // the hour '0' should be '12'
                        minutes = minutes < 10 ? '0'+ minutes : minutes;
                        seconds = seconds ? seconds : '00';
                        const time = hours + ":" + minutes + ":" + seconds + " " + ampm
                        const newPost = {
                          key: 0,
                          source: '',
                          time: time,
                          height: '',
                          likes: 0,
                          thumbnail: "https://image.ibb.co/f8mOFV/Screen-Shot-2015-12-01-at-1-21-33-PM.png",
                          likeButton: 'thumbs-o-up',
                          commentNum: 0,
                          user: 'You',
                          text: this.state.text
                      }
                      let oldFeed = this.state.yourPosts
                      for (let i = 0; i < this.state.yourPosts.length; i++) {
                        oldFeed[i].key++
                      }
                      newFeed = [newPost].concat(oldFeed)
                      console.log(newFeed)
                      this.setState({modalVisible: false, yourPosts: newFeed, searchYourPosts: newFeed,
                        text: ''})
                      this.refs.modal3.close()
                      }
                    }
                      
                      } >
                        <Text>
                            Post
                        </Text>
                    </Button>
                    </View>
                    </Right>
                </View>
        </Modal>
       </Container>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
        backgroundColor: '#26365e',
      padding: 10,
    },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})