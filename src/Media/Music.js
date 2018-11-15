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

class Music extends Component {
  
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
          <Title>Music</Title>
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
              <Picker.Item label="Alternative" value="key0"/>
              <Picker.Item label="Classical" value="key1"/>
              <Picker.Item label="Country" value="key2" />
              <Picker.Item label="Electronic" value="key3" />
              <Picker.Item label="Folk" value="key4" />
              <Picker.Item label="Hip-hop/Rap" value="key5" />
              <Picker.Item label="Indie" value="key6" />
              <Picker.Item label="Jazz" value="key7" />
              <Picker.Item label="Pop" value="key8" />
              <Picker.Item label="Punk" value="key9" />
              <Picker.Item label={"R&B/Soul"} value="key10" />
              <Picker.Item label="Rock" value="key11" />
              <Picker.Item label="Soundtrack" value="key12" />
              <Picker.Item label="World" value="key13" />
              <Picker.Item label="Other" value="key14" />
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
              style={{marginLeft: 172}} 
              onPress={this.handleDownload}
                  >
                <Icon 
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
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
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>So Sad, So Sad</Text>
              <Text style={{fontSize: 11}}>by Varsity</Text>
            </View>
            <View>
              <Button transparent 
              style={{marginLeft: 176}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
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
              style={{marginLeft: 188}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
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
              style={{marginLeft: 142}} 
              onPress={this.handleDownload}
                  >
                <Icon
                  name='download' 
                  type='Feather' 
                  style={{fontSize: 20, color: 'black'}}/>
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