import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Textarea, Left, Thumbnail, Icon, Header, Right, Button, Content, Card, CardItem, Text, Body, Spinner } from "native-base";
import Modal from 'react-native-modalbox'

export default class Alerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            modalVisible: false,
            communityAlerts: [
                { thumbnail: 'https://image.ibb.co/hhcaQV/Ping.jpg', alert: "Super crowded bus 747 :(", time: "15m ago" }
            ]
        }
    }
    
    handleAddPost() {
        let prevState = this.state;
        prevState.communityAlerts.push({ thumbnail: "https://image.ibb.co/f8mOFV/Screen-Shot-2015-12-01-at-1-21-33-PM.png", alert: prevState.text, time: "Few seconds ago"})
        this.setState({communityAlerts: prevState.communityAlerts, modalVisible: false, text: ''})
        this.refs.modal3.close()
    }
    communityAlerts() {
        let AlertList = this.state.communityAlerts.map((item) =>
            <CardItem key={item.alert}>
                <Left>
                    <Thumbnail source={{ uri: item.thumbnail}} />
                    <Body>
                        <Text> {item.alert}</Text>
                        <Text note> {item.time} </Text>
                    </Body>
                </Left>
            </CardItem>
        )         
            return AlertList; 


    }

    addAlertModal() {
        this.setState({modalVisible: true})
        this.refs.modal3.open()
        // alert("test")
    }

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
                                <Text style={{ fontSize: 10 }}>Delay at St.George Station, Eastbound Line 1 due to a medical emergency.</Text>
                            </Button>
                            <Button style={{ top: 5 }} bordered danger>
                                <Text style={{ fontSize: 10 }}> Traffic causing 21 minute delay on your route. </Text>
                            </Button>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text> Community Alerts</Text>
                        {/* <Right> */}
                        <Button small transparent >
                            <Text style={{ left: 4, fontSize: 10 }} onPress={() => {this.setState({modalVisible: true})
            this.refs.modal3.open()}}> Add Alert for Route </Text>
                            <Icon transparent name='chevron-circle-right'
                                type='FontAwesome' />
                        </Button>
                        {/* </Right> */}
                    </CardItem>
                    {this.communityAlerts()}
                </Card>
                <Modal style={{
            padding: 15,
            height: 300, width: 300
            }} position={"center"} 
            backdropPressToClose={false}
          ref={"modal3"} isDisabled={this.modalVisible}>
          
            <Text style={{fontWeight: "bold"}}>Create New Post</Text>
            <Textarea rowSpan={8} bordered placeholder="A a new service alert for your route." onChangeText={(text) =>{this.setState({text: text})}}/>
            <View style={{ flexDirection: "row"}}>
            <Button danger small onPress={()=>this.refs.modal3.close()}>
            <Text>Cancel</Text>
            </Button>
                    <Button small style={{bgcolor:'#34ed46'}}
                    onPress={() => {
                      this.handleAddPost()
                      }
                    }
                      
                    >
                        <Text>
                            Post
                        </Text>
                    </Button>
                    </View>
          
    
          </Modal>
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