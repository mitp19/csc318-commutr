import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import {
  Container, Header, Icon, Picker, Item, Input,
  Left, Right, Button, Body, Title, Card, CardItem, Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

let state = state = {
  selected: "key0",
  books: [
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "The Ask and the Answer",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key7", "key13"],
      title: "The Astonishing Color of After",
      artist: "Emily X.R. Pan",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4"],
      title: "Beartown",
      artist: "Fredrik Backman",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "Born a Crime",
      artist: "Trevor Noah",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5", "key12"],
      title: "The Buried Giant",
      artist: "Kazuo Ishiguro",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "The Dry (Aaron Falk #1)",
      artist: "Jane Harper",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "Force of Nature (Aaron Falk #2)",
      artist: "Jane Harper",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5"],
      title: "A Gentleman in Moscow",
      artist: "Amor Towles",
      downloaded: true
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "The Girl on the Train",
      artist: "Paula Hawkins",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key13"],
      title: "The Hate U Give",
      artist: "Angie Thomas",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5"],
      title: "The Heart's Invisible Furies",
      artist: "John Boyne",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "Killers of the Flower Moon",
      artist: "David Grann",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "The Knife of Never Letting Go",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4"],
      title: "Little Fires Everywhere",
      artist: "Celeste Ng",
      downloaded: true
    },
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "Monsters of Men",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key13"],
      title: "Noteworthy",
      artist: "Riley Redgate",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key1", "key4", "key11", "key12", "key13"],
      title: "The Princess Bride",
      artist: "William Goldman",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key6", "key8"],
      title: "The Silence of the Lambs",
      artist: "Thomas Harris",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "When Breath Becomes Air",
      artist: "Paul Kalanithi",
      downloaded: false
    }
  ],
  search: [
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "The Ask and the Answer",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key7", "key13"],
      title: "The Astonishing Color of After",
      artist: "Emily X.R. Pan",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4"],
      title: "Beartown",
      artist: "Fredrik Backman",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "Born a Crime",
      artist: "Trevor Noah",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5", "key12"],
      title: "The Buried Giant",
      artist: "Kazuo Ishiguro",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "The Dry (Aaron Falk #1)",
      artist: "Jane Harper",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "Force of Nature (Aaron Falk #2)",
      artist: "Jane Harper",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5"],
      title: "A Gentleman in Moscow",
      artist: "Amor Towles",
      downloaded: true
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key8"],
      title: "The Girl on the Train",
      artist: "Paula Hawkins",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key13"],
      title: "The Hate U Give",
      artist: "Angie Thomas",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key5"],
      title: "The Heart's Invisible Furies",
      artist: "John Boyne",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "Killers of the Flower Moon",
      artist: "David Grann",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "The Knife of Never Letting Go",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4"],
      title: "Little Fires Everywhere",
      artist: "Celeste Ng",
      downloaded: true
    },
    {
      type: "Books/Articles",
      genre: ["key3", "key4" ,"key12"],
      title: "Monsters of Men",
      artist: "Patrick Ness",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key2", "key4", "key13"],
      title: "Noteworthy",
      artist: "Riley Redgate",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key1", "key4", "key11", "key12", "key13"],
      title: "The Princess Bride",
      artist: "William Goldman",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key4", "key6", "key8"],
      title: "The Silence of the Lambs",
      artist: "Thomas Harris",
      downloaded: false
    },
    {
      type: "Books/Articles",
      genre: ["key9"],
      title: "When Breath Becomes Air",
      artist: "Paul Kalanithi",
      downloaded: false
    }
  ]
}

class BooksArticles extends Component {
  
  // const mediaIcon = parseIcon('')
  static navigationOptions = ({ navigation }) => ({
    title: 'Books/Articles',
    tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome>
  })

  constructor(props) {
    super(props);
    this.state = state;
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  componentWillMount() {
    if ((this.props.navigation.state.params)) {
      const newBooks = this.state.books
      for (let i = 0; i < this.state.books.length; i++ ) {
        if (this.state.books[i].downloaded) {
          let flag = false
          for (let j = 0; j < this.props.navigation.state.params.downloaded.length; j++) {
            if (this.props.navigation.state.params.downloaded[j].title === 
              this.state.books[i].title) {
                flag = true
              }
          }
          newBooks[i].downloaded = flag
        }
      }
      this.setState({books: newBooks, search: newBooks})
    }
  }


  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  renderBookCards(filter) {
    return (
      this.state.books.map((element) => {
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
                const index = this.state.books.indexOf(element)
                const newBooks = this.state.books
                newBooks[index].downloaded = true
                this.setState({
                  books: newBooks
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
                this.props.navigation.navigate('PlaceHolderBook', {title: element.title})
              }
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
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
                  this.props.navigation.navigate('PlaceHolderBook', {title: element.title})
                }
                    >
                  <Icon 
                    name='open-in-new' 
                    type='MaterialCommunityIcons' 
                    style={{fontSize: 20, color: 'black'}}/>
                </Button>
                </View>
                </Body>
            </CardItem>
          </Card>
          )
        }
      })
    )
  }

  render () {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
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
          <Title>Books/Articles</Title>
          </Body>
          <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={(text) =>
              {const newBooks = this.state.search.filter(book => {
                 return book.title.toUpperCase().includes(text.toUpperCase()) || 
                 book.artist.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 books: newBooks
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
                    <Title style={{ color: "#fff" }}>Choose a genre</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="View All" value="key0"/>
              <Picker.Item label="Classics" value="key1"/>
              <Picker.Item label="Contemporary" value="key2" />
              <Picker.Item label="Dystopia" value="key3" />
              <Picker.Item label="Fiction" value="key4" />
              <Picker.Item label="Historical Fiction" value="key5" />
              <Picker.Item label="Horror" value="key6" />
              <Picker.Item label="Magical Realism" value="key7" />
              <Picker.Item label="Mystery/Thriller" value="key8" />
              <Picker.Item label="Nonfiction" value="key9" />
              <Picker.Item label="Poetry" value="key10" />
              <Picker.Item label="Romance" value="key11" />
              <Picker.Item label="Sci-fi/Fantasy" value="key12" />
              <Picker.Item label="Young Adult" value="key13" />
              <Picker.Item label="Other" value="key14" />
            </Picker>
          <Content padder>
            {this.renderBookCards(this.state.selected)}
        </Content>
      </Container>
      )
  }
}

export default BooksArticles;

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