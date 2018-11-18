import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import {
  Container, Header, Icon, Picker, Left, Right, Button, Body, Title, Card, CardItem,Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

class Podcasts extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>
  })

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      podcasts: [
        {
          genre: ["key8"],
          title: "The Argument",
          artist: "The New York Times Opinion",
          downloaded: false
        },
        {
          genre: ["key1"],
          title: "Dreamboy",
          artist: "Night Vale Presents",
          downloaded: false
        },
        {
          genre: ["key4"],
          title: "Eyes Before Flippers",
          artist: "Dan Riskin",
          downloaded: false
        },
        {
          genre: ["key7"],
          title: "Forever Ago",
          artist: "American Public Media",
          downloaded: false
        },
        {
          genre: ["key1", "key6"],
          title: "Home Cooked",
          artist: "Home Cooked",
          downloaded: false
        },
        {
          genre: ["key11"],
          title: "Other People's Problems",
          artist: "CBC Podcasts",
          downloaded: false
        },
        {
          genre: ["key3"],
          title: "Pete's Paranormal Chronicles",
          artist: "PPC",
          downloaded: false
        },
        {
          genre: ["key3"],
          title: "Wonderful!",
          artist: "Rachel and Griffin McElroy",
          downloaded: false
        }
      ]
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  renderPodcastCards(filter) {
    return (
      this.state.podcasts.map((element) => {
        if ((element.genre.includes(filter) || filter === "key0") && 
        element.downloaded == false) {
        return (
          <Card key={element.title}>
          <CardItem bordered>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
              <Text style={{fontSize: 11}}>by {element.artist}</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <View>
              <Button transparent 
              onPress={() => {
                Alert.alert('Item Downloaded!')
                const index = this.state.podcasts.indexOf(element)
                const newPodcasts = this.state.podcasts
                newPodcasts[index].downloaded = true
                this.setState({
                  books: newPodcasts
                });
              }}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
                  >
                <Icon 
                  name='play-circle'
                  type='FontAwesome'
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
              </Body>
          </CardItem>
        </Card>
        )} else if ((element.genre.includes(filter) || filter === "key0") && 
        element.downloaded == true) {
          return (
            <Card key={element.title}>
            <CardItem bordered>
              <View>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
                <Text style={{fontSize: 11}}>by {element.artist}</Text>
              </View>
              <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <View>
              <Body>
              <Button transparent bordered dark small
              onPress={() =>
                this.props.navigation.navigate('Downloads')}
                    >
                  <Text style={{fontSize: 8}}>View in Downloads</Text>
                </Button>
              </Body>
                <Button 
                transparent 
                    >
                  <Icon 
                    name='play-circle'
                    type='FontAwesome'
                    style={{fontSize: 20, color: 'black'}}/>
                </Button>
                </View>
                </Body>
            </CardItem>
          </Card>
          )}
      })
    )
  }

  render () {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent
            onPress={() =>
              this.props.navigation.goBack(this.props.navigation.state.key)
            }>
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
          <Body>
          <Title>Podcasts</Title>
          </Body>
          <Right />
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            showLoading
            onChangeText={(text) =>
              {const newPodcasts = this.state.search.filter(podcast => {
                 return podcast.title.toUpperCase().includes(text.toUpperCase()) || 
                 podcast.artist.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 music: newPodcasts
               })}}
            cancelButtonTitle="Cancel"
            placeholder='Search' />
        </Header>
        <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "#c0392b" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Choose a category</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="View All" value="key0"/>
              <Picker.Item label="Art" value="key1"/>
              <Picker.Item label="Business" value="key2"/>
              <Picker.Item label="Comedy" value="key3" />
              <Picker.Item label="Education" value="key4" />
              <Picker.Item label={"Games & Hobbies"} value="key5" />
              <Picker.Item label="Health" value="key6" />
              <Picker.Item label={"Kids & Family"} value="key7" />
              <Picker.Item label={"News & Politics"} value="key8" />
              <Picker.Item label={"Religion & Spirituality"} value="key9" />
              <Picker.Item label={"Science & Medicine"} value="key10" />
              <Picker.Item label={"Society & Culture"} value="key11" />
              <Picker.Item label={"Sports & Recreation"} value="key12" />
              <Picker.Item label="Technology" value="key13" />
              <Picker.Item label="Other" value="key14" />
            </Picker>
        <Content padder>
          {this.renderPodcastCards(this.state.selected)}
        </Content>
      </Container>
      )
  }
}

export default Podcasts;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})