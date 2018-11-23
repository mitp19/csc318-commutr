import React, {Component} from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  Container, Header, Content, Card, CardItem,
  Text, Body, Button, Icon, Title, Left, Right, Item, Input, Thumbnail, Segment, Textarea
} from "native-base";

class CreatePost extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Social',
        tabBarIcon: ({ tintColor }) => <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>
    
      })
    
    render(){
        return(
            <Container>
                <Header hasSegment>
                <Left>
                    <Button transparent
                    onPress={() => this.props.navigation.navigate('ForumCard')}
                    >
                    <Icon 
                    name='chevron-circle-left' 
                    type='FontAwesome' 
                    style={{fontSize: 28, color: 'black'}}/>
                    </Button>
                </Left>
                <Body>
                    <Title>
                        Create a New Post
                    </Title>
                </Body>
                </Header>
                    <Segment>
                    <Button first active onPress={() => this.props.navigation.navigate("ForumCard")}>
                        <Text>Forum</Text>
                    </Button>
                    <Button last onPress={() => this.props.navigation.navigate("ChatHome")}>
                        <Text>Chat</Text>
                    </Button>
                    </Segment>
            <Container styles={styles.container}>
            <Card transparent>
                <CardItem>
                    <View style={{ flexDirection: "column", flex: 1, justifyContent: 'space-between'}}>
                    <Textarea rowSpan={5} bordered placeholder="Enter Post"/>
                    </View>
                </CardItem>
                <CardItem>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between'}}>
                    <Button transparent>
                        <Icon name='link'/>
                    </Button>
                    <Button transparent>
                        <Icon name='camera'/>
                    </Button>
                    <Right>
                    <Button success>
                        <Text>
                            Post
                        </Text>
                    </Button>
                    </Right>
                </View>
                </CardItem>


            </Card>
            </Container>
        </Container>

        )
    }
}

export default CreatePost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#81c800',
    // padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})