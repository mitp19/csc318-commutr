import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Container, Header, Icon, Picker, Left, Right, Button, Body, Title, Card, CardItem,Content
} from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { SearchBar } from 'react-native-elements'

class Downloads extends Component {
  
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
          <Title>Downloads</Title>
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
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Party For One</Text>
              <Text style={{fontSize: 11}}>by Carly Rae Jepsen</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 175}} 
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 172}}
                  >
                <Icon 
                  name='play-circle' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Rose-Colored Boy</Text>
              <Text style={{fontSize: 11}}>by Paramore</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 158}} 
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 155}}
                  >
                <Icon 
                  name='play-circle' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>So Sad, So Sad</Text>
              <Text style={{fontSize: 11}}>by Varsity</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 179}} 
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 176}}
                  >
                <Icon 
                  name='play-circle' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>thank u, next</Text>
              <Text style={{fontSize: 11}}>by Ariana Grande</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 191}} 
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 188}}
                  >
                <Icon 
                  name='play-circle' 
                  type='MaterialCommunityIcons' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>We Belong Together</Text>
              <Text style={{fontSize: 11}}>by Mariah Carey</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 145}} 
                  >
                <Icon 
                  name='ios-trash' 
                  type='Ionicons' 
                  style={{fontSize: 26, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 142}}
                  >
                <Icon 
                  name='play-circle' 
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