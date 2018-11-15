import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import {
    Container, Content, Card, CardItem, Text, Body, ListItem, CheckBox,
    Item, Input, Icon, Button
} from "native-base";

export default class Goals extends Component {

    render() {
        return (
            <Container styles={styles.container}>
                <Content>
                    <Card>
                        <CardItem header bordered>
                            <Text> Set Goals for Productive Commutes </Text>
                        </CardItem>
                        <CardItem bordered cardBody>
                            <Body>
                                <ListItem style={{ width: 325 }}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text> Read Chapter 3 of Factfulness  </Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ width: 325 }}>
                                    <CheckBox checked={false} color="red" />
                                    <Body>
                                        <Text> Reply Back to Mom's Text</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ width: 325 }}>
                                    <CheckBox checked={false} color="red" />
                                    <Body>
                                        <Text> Figure what life is </Text>
                                    </Body>
                                </ListItem>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Input placeholder='Add a new goal' />
                                <Button active transparent>
                                <Icon type="FontAwesome" name='plus-circle' color="green"/>
                                </Button>
                                
                            </Item>
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
