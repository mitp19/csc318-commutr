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

import { SearchBar } from 'react-native-elements';

state = {
  selected: "key0",
  music: [
    {
      type: "Music",
      genre: ["key1", "key7"],
      title: "Call It Off",
      artist: "Tegan and Sara",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Fake Happy",
      artist: "Paramore",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Hard Times",
      artist: "Paramore",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key6"],
      title: "Hotline Bling",
      artist: "Drake",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "Party For One",
      artist: "Carly Rae Jepsen",
      downloaded: true
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Rose-Colored Boy",
      artist: "Paramore",
      downloaded: true
    },
    {
      type: "Music",
      genre: ["key1", "key12"],
      title: "So Sad, So Sad",
      artist: "Varsity",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key13"],
      title: "Start of Something New",
      artist: "Zac Efron & Vanessa Hudgens",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "thank u, next",
      artist: "Ariana Grande",
      downloaded: false
    },
    {
      genre: ["key11"],
      title: "We Belong Together",
      artist: "Mariah Carey",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key13"],
      title: "We're All in This Together",
      artist: "High School Musical Cast",
      downloaded: false
    }
  ],
  search: [
    {
      type: "Music",
      genre: ["key1", "key7"],
      title: "Call It Off",
      artist: "Tegan and Sara",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Fake Happy",
      artist: "Paramore",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Hard Times",
      artist: "Paramore",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key6"],
      title: "Hotline Bling",
      artist: "Drake",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "Party For One",
      artist: "Carly Rae Jepsen",
      downloaded: true
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Rose-Colored Boy",
      artist: "Paramore",
      downloaded: true
    },
    {
      type: "Music",
      genre: ["key1", "key12"],
      title: "So Sad, So Sad",
      artist: "Varsity",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key13"],
      title: "Start of Something New",
      artist: "Zac Efron & Vanessa Hudgens",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "thank u, next",
      artist: "Ariana Grande",
      downloaded: false
    },
    {
      genre: ["key11"],
      title: "We Belong Together",
      artist: "Mariah Carey",
      downloaded: false
    },
    {
      type: "Music",
      genre: ["key13"],
      title: "We're All in This Together",
      artist: "High School Musical Cast",
      downloaded: false
    }
  ]
}

class Music extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>
  })

  constructor(props) {
    super(props);
    // Retrieve the last state
    this.state = state;
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  componentWillMount() {
    if ((this.props.navigation.state.params)) {
      const newMusic = this.state.music
      for (let i = 0; i < this.state.music.length; i++ ) {
        if (this.state.music[i].downloaded) {
          let flag = false
          for (let j = 0; j < this.props.navigation.state.params.downloaded.length; j++) {
            if (this.props.navigation.state.params.downloaded[j].title === 
              this.state.music[i].title) {
                flag = true
              }
          }
          newMusic[i].downloaded = flag
        }
      }
      this.setState({music: newMusic, search: newMusic})
    }
  }

  renderMusicCards(filter) {
    return (
      this.state.music.map((element) => {
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
                const index = this.state.music.indexOf(element)
                const newMusic = this.state.music
                newMusic[index].downloaded = true
                this.setState({
                  books: newMusic
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
              onPress={() =>
                this.props.navigation.navigate('PlaceHolderMusicPodcast', 
                {title: element.title, artist: element.artist})
              }
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
                this.props.navigation.navigate('Downloads', {newDownload: element})}
                    >
                  <Text style={{fontSize: 8}}>View in Downloads</Text>
                </Button>
              </Body>
                <Button 
                transparent 
                onPress={() =>
                  this.props.navigation.navigate('PlaceHolderMusicPodcast', 
                  {title: element.title, artist: element.artist})
                }
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
              this.props.navigation.navigate("TabA")
            }>
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
          <Body>
          <Title>Music</Title>
          </Body>
          <Right />
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            showLoading
            onChangeText={(text) =>
              {const newMusic = this.state.search.filter(music => {
                 return music.title.toUpperCase().includes(text.toUpperCase()) || 
                 music.artist.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 music: newMusic
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
                    <Title style={{ color: "#fff" }}>Choose a genre</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="View All" value="key0" />
              <Picker.Item label="Alternative" value="key1"/>
              <Picker.Item label="Classical" value="key2"/>
              <Picker.Item label="Country" value="key3" />
              <Picker.Item label="Electronic" value="key4" />
              <Picker.Item label="Folk" value="key5" />
              <Picker.Item label="Hip-hop/Rap" value="key6" />
              <Picker.Item label="Indie" value="key7" />
              <Picker.Item label="Jazz" value="key8" />
              <Picker.Item label="Pop" value="key9" />
              <Picker.Item label="Punk" value="key10" />
              <Picker.Item label={"R&B/Soul"} value="key11" />
              <Picker.Item label="Rock" value="key12" />
              <Picker.Item label="Soundtrack" value="key13" />
              <Picker.Item label="Other" value="key14" />
            </Picker>
        <Content padder>
        {this.renderMusicCards(this.state.selected)}
        </Content>
      </Container>
      )
  }
}

export default Music;

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