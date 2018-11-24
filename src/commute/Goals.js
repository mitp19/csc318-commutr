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
        this.goalInput = React.createRef();
        this.state = {
            placeholder: "Add a new goal",
            items: [
                {index: 0, status: true, goal: "Read Chapter 3 of Factfulness"},
                {index: 1, status: false, goal: "Reply back to Mom's text"},
                {index: 2, status: false, goal: "Figure out what life is"}
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
        let previousState = this.state;
        let added_goal = previousState.new_goal;
        if (previousState.items.includes(added_goal)) {alert("Goal Already Exists"); return;}
        if (added_goal == "") {alert("No Goal Entered"); return;}
        previousState.items.push({index: this.state.items.length, status: false, goal: added_goal})
        this.setState({
            items: previousState.items,
            new_goal: "",
            placeholder: previousState.placeholder})
        this.goalInput.current._root.clear();
        }
    
    handleCheckedGoal(index) {
        let prevState = this.state;
        prevState.items[index].status = !prevState.items[index].status
        this.setState({
            items: prevState.items
            })
    }
    
    renderGoalList() {
        let GoalList = this.state.items.map((item) =>
                <ListItem key={item.goal} style={{ width: 325 }}>
                    <CheckBox  onPress={() => {
                        this.handleCheckedGoal(item.index);
                    }}
                    checked={item.status} color={this.getColor(item.status)}/>
                    <Body>
                        <Text> {item.goal}</Text>
                    </Body>
                </ListItem>
        )
        return GoalList;
    }
    render() {
        return (
            // <Container styles={styles.container}>
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
                                ref={this.goalInput}
                                onChangeText={(new_goal) => this.setState({new_goal})} 
                                placeholder={this.state.placeholder} 
                                />
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
        fontSize: 40,
        fontWeight: 'bold',
    }
})
