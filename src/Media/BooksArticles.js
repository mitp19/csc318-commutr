import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
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
      selected: "key0"
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
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
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>The Astonishing Color of After</Text>
              <Text style={{fontSize: 11}}>by Emily X.R. Pan</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 80}} 
                  >
                <Icon 
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 80}}
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Beartown</Text>
              <Text style={{fontSize: 11}}>by Fredrik Backman</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 184}} 
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 184}}
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>A Gentleman in Moscow</Text>
              <Text style={{fontSize: 11}}>by Amor Towles</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 122}} 
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 122}}
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>The Heart's Invisible Furies</Text>
              <Text style={{fontSize: 11}}>by John Boyne</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 99}} 
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 99}}
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Little Fires Everywhere</Text>
              <Text style={{fontSize: 11}}>by Celeste Ng</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 127}} 
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 127}}
                  >
                <Icon 
                  name='open-in-new' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
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