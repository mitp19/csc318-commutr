import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import {
    Container, Header, Content, Card, CardItem,
    Text, Body, Button, Icon, Title, Left, Right, Item, Input
} from "native-base";
import Destination from "./commute/Destination";

export default class WhereGoing extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Container styles={styles.container}>
                <Header>
                    <Left />
                    <Body>
                        <Title>Commute</Title>
                    </Body>
                    <Right />
                </Header>
                <Destination> </Destination>

                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text> Where are you going?</Text>
                            <Button iconLeft primary style={{ left: 10 }}>
                                        <Icon name='plus' />
                                        <Text>Add New Location</Text>
                            </Button>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
                                    <Button iconLeft>
                                        <Icon name='home' />
                                        <Text>Home</Text>
                                    </Button>
                                    <Button iconLeft primary style={{ left: 10 }}>
                                        <Icon name='briefcase' />
                                        <Text>Work</Text>
                                    </Button>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={{ paddingBottom: 10 }}>
                                <Text>Recent Destinations</Text>
                                <Button block style={{ top: 5 }}>
                                    <Text>150 College St.</Text>
                                </Button>
                                <Button block style={{ top: 10 }}>
                                    <Text>39 Sunflower Rd.</Text>
                                </Button>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item>
                                    <Input placeholder='Enter New Destination' />
                                    <Button active>
                                        <Icon active name='arrow-right' type="FontAwesome"/>
                                    </Button>
                                    
                                </Item>
                            </Body>
                        </CardItem>
          </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#8e44ad',
        // padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
})
