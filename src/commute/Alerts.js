import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Item, Input, Icon, Header, Right, Button, Content, Card, CardItem, Text, Body } from "native-base";

export default class Alerts extends Component {
    render() {
        return (
            // <Container styles={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text> System Alerts</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Button bordered warning>
                                    <Text style={{fontSize:10}}>Delay at St.George Station, Eastbound Line 1 due to a medical emergency.</Text>
                                </Button>
                                <Button style={{top:5}} bordered danger>
                                    <Text style={{fontSize:10}}> Traffic causing 21 minute delay on your route. </Text>
                                </Button>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text> Community Alerts</Text>

                            {/* <Right> */}
                            <Button small transparent >
                                <Text style={{ left: 4, fontSize: 10 }}> Add Alert for Route </Text>
                                <Icon transparent name='chevron-circle-right'
                                    type='FontAwesome' />
                            </Button>
                            {/* </Right> */}
                        </CardItem>
                    </Card>
                </Content>
            // </Container>
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
        // fontSize: 40,
        fontWeight: 'bold',
    }
})