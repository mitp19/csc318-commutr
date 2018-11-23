import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Container, Header, Icon, Picker, Left, Right, Button, Item, Input,
  Body, Title, Card, CardItem, Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

import AwesomeAlert from 'react-native-awesome-alerts'

let state = {
  delete: {},
  prevTab: 'TabA',
  showAlert: false,
  selected: "key0",
  downloads: [
    {
      type: "Podcasts",
      genre: ["key1"],
      title: "Dreamboy",
      artist: "Night Vale Presents"
    },
    {
      type: "Podcasts",
      genre: ["key7"],
      title: "Forever Ago",
      artist: "American Public Media"
    },
    {
      type: "Books/Articles",
      genre: ["key5"],
      title: "A Gentleman in Moscow",
      artist: "Amor Towles"
    },
    {
      type: "Books/Articles",
      genre: ["key2"],
      title: "Little Fires Everywhere",
      artist: "Celeste Ng"
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "Party For One",
      artist: "Carly Rae Jepsen"
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Rose-Colored Boy",
      artist: "Paramore"
    }
  ],
  search: [
    {
      type: "Podcasts",
      genre: ["key1"],
      title: "Dreamboy",
      artist: "Night Vale Presents"
    },
    {
      type: "Podcasts",
      genre: ["key7"],
      title: "Forever Ago",
      artist: "American Public Media"
    },
    {
      type: "Books/Articles",
      genre: ["key5"],
      title: "A Gentleman in Moscow",
      artist: "Amor Towles"
    },
    {
      type: "Books/Articles",
      genre: ["key2"],
      title: "Little Fires Everywhere",
      artist: "Celeste Ng"
    },
    {
      type: "Music",
      genre: ["key9"],
      title: "Party For One",
      artist: "Carly Rae Jepsen"
    },
    {
      type: "Music",
      genre: ["key9", "key12"],
      title: "Rose-Colored Boy",
      artist: "Paramore"
    }
  ]
};

class Downloads extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>
  })

  constructor(props) {
    super(props)
    //Retrieve last state
    this.state = state;
  }

  returnDownloads() {
    return (
      this.state.downloads
    )
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }
  

  onValueChange(value: string) {
    this.setState({
      selected: value
    })
  }

  componentDidMount() {
    const newDownload = {}
    if (this.props.navigation.state.params) {
      newDownload.type = this.props.navigation.state.params.newDownload.type;
      newDownload.title = this.props.navigation.state.params.newDownload.title;
      newDownload.artist = this.props.navigation.state.params.newDownload.artist;
      const newDownloads = this.state.downloads
      let inDownloads = false
      for (let i = 0; i < this.state.downloads.length; i++) {
        if (this.state.downloads[i].title === newDownload.title) {
          inDownloads = true
        }
      }
      if (inDownloads === false) {
        newDownloads.push(newDownload)
      }
      let tab;
      if (newDownload.type === 'Books/Articles') {
        tab = 'BooksArticles'
      } else if (newDownload.type === 'Music') {
        tab = 'Music'
      } else if (newDownload.type === 'Podcasts') {
        tab = 'Podcasts'
      }
      this.setState({prevTab: tab, downloads: newDownloads, search: newDownloads})
    } else {
      this.setState({prevTab: 'TabA'})
    }
  }

  renderCards(filter) {
    return (
      this.state.downloads.map((element) => {
        if ((filter === "key0" || filter === "key2") && 
        (element.type === "Music")) {
        return (
          <Card key={element.title}>
          <CardItem bordered>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
              <Text style={{fontSize: 11}}>by {element.artist}</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <Right>
              <Button transparent 
              onPress={() => {
                this.setState({delete: element, showAlert: true})}}
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
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
              </Right>
              </Body>
          </CardItem>
        </Card>
        )
      } else if ((filter === "key0" || filter === "key1") && 
      (element.type === "Books/Articles")) {
        return (
          <Card key={element.title}>
          <CardItem bordered>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
              <Text style={{fontSize: 11}}>by {element.artist}</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <View>
              <Right>
              <Button transparent 
              onPress={() => {
                this.setState({delete: element, showAlert: true})}}
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              {this.state.alert}
              </Right>
              <Right>
              <Button 
              transparent 
              onPress={() =>
                this.props.navigation.navigate('PlaceHolderBook', {title: element.title})
              }
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </Right>
            </View>
            </Body>
          </CardItem>
        </Card>
        )
      } else if ((filter === "key0" || filter === "key3") && 
      (element.type === "Podcasts")) {
      return (
        <Card key={element.title}>
        <CardItem bordered>
          <View>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
            <Text style={{fontSize: 11}}>by {element.artist}</Text>
          </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <View>
            <Right>
            <Button transparent 
            onPress={() => {
              this.setState({delete: element, showAlert: true})}}
                >
              <Icon 
                name='ios-trash' 
                type='Ionicons' 
                style={{fontSize: 26, color: 'black'}}/>
            </Button>
            {this.state.alert}
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
            </Right>
            </View>
            </Body>
        </CardItem>
      </Card>
      )
      }
    }
    )
    )
  }

  render () {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Left>
            <Button transparent
            onPress={() =>
                
              { if (this.state.prevTab === 'BooksArticles') {
                this.props.navigation.navigate('BooksArticles', {downloaded: this.state.downloads})
              } else if (this.state.prevTab === 'TabA') {
                this.props.navigation.navigate("TabA", {downloaded: this.state.downloads})
              } else if (this.state.prevTab === 'Music') {
                this.props.navigation.navigate("Music", {downloaded: this.state.downloads})
              } else if (this.state.prevTab === 'Podcasts') {
                this.props.navigation.navigate("Podcasts", {downloaded: this.state.downloads})
              }
            }
            }  
            >
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
          <Body>
          <Title>Downloads</Title>
          </Body>
          <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={(text) =>
             {const newDownloads = this.state.search.filter(download => {
                return download.title.toUpperCase().includes(text.toUpperCase()) || 
                download.artist.toUpperCase().includes(text.toUpperCase())
              })
              this.setState({
                downloads: newDownloads
              })}}/>
        </Item>
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
              <Picker.Item label="Books/Articles" value="key1"/>
              <Picker.Item label="Music" value="key2" />
              <Picker.Item label="Podcasts" value="key3" />
            </Picker>
        <Content padder>
          {this.renderCards(this.state.selected)}
        </Content>
        <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                title="Are you sure?"
                message="Once deleted, you will not be able to recover this file!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showAlert: false})}
                onConfirmPressed={() => {
                  const newDownloads = this.state.downloads.filter(download => {
                    return download.title !== this.state.delete.title
                  })
                  this.setState({
                    showAlert: false,
                    downloads: newDownloads
                  })
                }}
                />
      </Container>
      )
  }
}

export default Downloads;

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