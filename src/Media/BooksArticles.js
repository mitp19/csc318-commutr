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
          title: "The Astonishing Color of After",
          author: "Emily X.R. Pan"
        },
        {
          title: "Beartown",
          author: "Fredrik Backman"
        },
        {
          title: "A Gentleman in Moscow",
          author: "Amor Towles"
        },
        {
          title: "The Heart's Invisible Furies",
          author: "John Boyne"
        },
        {
          title: "Little Fires Everywhere",
          author: "Celeste Ng"
        }
      ]
    }
  }
  
  handleDownload() {
    Alert.alert('Item Downloaded!')
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  renderBookCards() {
    let keyId = 1;
    return (
      this.state.books.map((element) => {
        return (
          <Card key={keyId++}>
          <CardItem bordered>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{element.title}</Text>
              <Text style={{fontSize: 11}}>by {element.author}</Text>
            </View>
            <Body style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <View>
              <Button transparent 
              onPress={this.handleDownload}
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
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
              </Body>
          </CardItem>
        </Card>
        )
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
              this.props.navigation.navigate('TabA')
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
              <Picker.Item label="Action/Adventure" value="key0"/>
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
            {this.renderBookCards()}
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