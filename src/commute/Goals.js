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
    constructor(props) {
        super(props)
        this.state = {
            placeholder: "Add a new goal",
            items: [
                {status: true, goal: "Read Chapter 3 of Factfulness"},
                {status: false, goal: "Reply back to Mom's text"},
                {status: false, goal: "Figure out what life is"}
            ], 
            new_goal: ""
        }
    }

    getColor(truth) {
        if (truth) {
            return "green";
        }
        return "red";
    }

    handleAddNewGoal() {
        let previousState = this.state
        previousState.items.push({status: false, goal: previousState.new_goal})
        this.setState({
            items: previousState.items,
            new_goal: "",
            placeholder: previousState.placeholder})
    }
    renderGoalList() {
        let GoalList = this.state.items.map((item) =>
                <ListItem key={item.goal} style={{ width: 325 }}>
                    <CheckBox checked={item.status} color={this.getColor(item.status)}/>
                    <Body>
                        <Text> {item.goal}</Text>
                    </Body>
                </ListItem>
        )
        return GoalList;
    }
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
                                {this.renderGoalList()}
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Input 
                                onChangeText={(new_goal) => this.setState({new_goal})} 
                                placeholder={this.state.placeholder} />
                                <Button 
                                onPress={this.handleAddNewGoal.bind(this)}
                                active 
                                transparent>
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
