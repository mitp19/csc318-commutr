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
      selected: "key0"
    };
  }

  handleDownload() {
    Alert.alert('Item Downloaded!')
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
          <Title>Podcasts</Title>
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
              <Picker.Item label="Art" value="key0"/>
              <Picker.Item label="Business" value="key1"/>
              <Picker.Item label="Comedy" value="key2" />
              <Picker.Item label="Education" value="key3" />
              <Picker.Item label={"Games & Hobbies"} value="key4" />
              <Picker.Item label={"Government & Organizations"} value="key5" />
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
        <Card>
          <CardItem bordered style={{width: 280}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>The Argument</Text>
              <Text style={{fontSize: 11}}>by The New York Times Opinion</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 105}} 
              onPress={this.handleDownload}
                  >
                <Icon 
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 105}}
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
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Dreamboy</Text>
              <Text style={{fontSize: 11}}>by Night Vale Presents</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 155}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
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
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Forever Ago</Text>
              <Text style={{fontSize: 11}}>by American Public Media</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 139}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 139}}
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
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Home Cooked</Text>
              <Text style={{fontSize: 11}}>by Home Cooked</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 178}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 178}}
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
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Other People's Problems</Text>
              <Text style={{fontSize: 11}}>by CBC Podcasts</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 105}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
              </Button>
              <Button 
              transparent 
              style={{marginLeft: 105}}
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