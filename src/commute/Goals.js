import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import {
    Container, Header, Content, Card, CardItem,
    Text, Body, Button, Icon, Title, Left, Right, Item, Input
} from "native-base";

export default class Goals extends Component {

    render() {
        return (
            <Container styles={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text> Set your productive commute goals </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>

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
