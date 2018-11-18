import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import {
  Container, Header, Icon, Picker, Left, Right, Button, Body, Title, Card, CardItem, Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

class BooksArticles extends Component {
  
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
      books: [
        {
          type: "Books/Articles",
          genre: ["key2", "key7", "key13"],
          title: "The Astonishing Color of After",
          artist: "Emily X.R. Pan",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key2"],
          title: "Beartown",
          artist: "Fredrik Backman",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key5"],
          title: "A Gentleman in Moscow",
          artist: "Amor Towles",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key5"],
          title: "The Heart's Invisible Furies",
          artist: "John Boyne",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key2"],
          title: "Little Fires Everywhere",
          artist: "Celeste Ng",
          downloaded: false
        }
      ],
      search: [
        {
          type: "Books/Articles",
          genre: ["key2", "key7", "key13"],
          title: "The Astonishing Color of After",
          artist: "Emily X.R. Pan",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key2"],
          title: "Beartown",
          artist: "Fredrik Backman",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key5"],
          title: "A Gentleman in Moscow",
          artist: "Amor Towles",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key5"],
          title: "The Heart's Invisible Furies",
          artist: "John Boyne",
          downloaded: false
        },
        {
          type: "Books/Articles",
          genre: ["key2"],
          title: "Little Fires Everywhere",
          artist: "Celeste Ng",
          downloaded: false
        }
      ]
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
                this.props.navigation.navigate('PlaceHolderBook')
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
                this.props.navigation.navigate('Downloads')}
                    >
                  <Text style={{fontSize: 8}}>View in Downloads</Text>
                </Button>
              </Body>
                <Button 
                transparent 
                onPress={() =>
                  this.props.navigation.navigate('PlaceHolderBook')
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
          <Title>Books/Articles</Title>
          </Body>
          <Right />
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            showLoading
            onChangeText={(text) =>
              {const newBooks = this.state.search.filter(book => {
                 return book.title.toUpperCase().includes(text.toUpperCase()) || 
                 book.artist.toUpperCase().includes(text.toUpperCase())
               })
               this.setState({
                 books: newBooks
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