import React, { Component } from 'react';
import { 
  StyleSheet, ScrollView, KeyboardAvoidingView, 
  TextInput, TouchableHighlight, Keyboard } from 'react-native';
import { Subtitle, Icon, Left, Right, Title, Container, Header, Button, Body, Text, View, Segment } from 'native-base'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AutogrowInput from 'react-native-autogrow-input';
import AwesomeAlert from 'react-native-awesome-alerts'

//used to make random-sized messages
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The actual chat view itself- a ScrollView of BubbleMessages, with an InputBar at the bottom, which moves with the keyboard
class ChatView extends Component {

  constructor(props) {
    super(props);

    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = 20;

    var messages = [];

    for(var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(10, 120);

      var direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        direction: direction,
        text: message
      })
    }

    this.state = {
      messages: messages,
      inputBarText: '',
      showAlert: false
    }
  }

  //fun keyboard stuff- we use these to get the end of the ScrollView to "follow" the top of the InputBar as the keyboard rises and falls
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  //When the keyboard appears, this gets the ScrollView to move the end back "up" so the last message is visible with the keyboard up
  //Without this, whatever message is the keyboard's height from the bottom will look like the last message.
  keyboardDidShow (e) {
    this.scrollView.scrollToEnd();
  }

  //When the keyboard dissapears, this gets the ScrollView to move the last message back down.
  keyboardDidHide (e) {
    this.scrollView.scrollToEnd();
  }

  //scroll to bottom when first showing the view
  componentDidMount() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  //this is a bit sloppy: this is to make sure it scrolls to the bottom when a message is added, but 
  //the component could update for other reasons, for which we wouldn't want it to scroll to the bottom.
  componentDidUpdate() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  _sendMessage() {
    this.state.messages.push({direction: "right", text: this.state.inputBarText});

    this.setState({
      messages: this.state.messages,
      inputBarText: ''
    });
  }

  _onChangeInputBarText(text) {
    this.setState({
      inputBarText: text
    });
  }

  //This event fires way too often.
  //We need to move the last message up if the input bar expands due to the user's new message exceeding the height of the box.
  //We really only need to do anything when the height of the InputBar changes, but AutogrowInput can't tell us that.
  //The real solution here is probably a fork of AutogrowInput that can provide this information.
  _onInputSizeChange() {
    setTimeout(function() {
      this.scrollView.scrollToEnd({animated: false});
    }.bind(this))
  }

  chatView() {

    let messages = [];

      this.state.messages.forEach(function(message, index) {
        messages.push(
            <MessageBubble key={index} direction={message.direction} text={message.text}/>
          )
      })

      if (this.props.navigation.state.params.page === 'CreateChat') {
        message = []
    } 

    return (
              <View style={styles.outer}>
                  <ScrollView ref={(ref) => { this.scrollView = ref }} style={styles.messages}>
                    {messages}
                  </ScrollView>
                  <InputBar onSendPressed={() => this._sendMessage()} 
                            onSizeChange={() => this._onInputSizeChange()}
                            onChangeText={(text) => this._onChangeInputBarText(text)}
                            text={this.state.inputBarText}/>
                  <KeyboardSpacer/>             
              </View>
            );
  }

  render() {
    return (
      <Container >
        <Header hasSegment>
        <Left>
        <Button transparent
            onPress={() => {
              if (this.props.navigation.state.params.page === 'CreateChat') {
                this.props.navigation.navigate("YourChatList", {
                  name: this.props.navigation.state.params.name,
                  anonymity: this.props.navigation.state.params.anonymity, 
                  type: this.props.navigation.state.params.type, 
                  members: this.props.navigation.state.params.member, 
                  page: 'ChatView', delete: ''})
            } else {
              this.props.navigation.goBack(this.props.navigation.state.key)  
            }         
            }}  
            >
              <Icon 
                name='chevron-circle-left' 
                type='FontAwesome' 
                style={{fontSize: 28, color: 'black'}}/>
            </Button>
          </Left>
        <Body style={{justifyContent: 'center', alignItems: 'center'}}>
            <Title>{this.props.navigation.state.params.name}</Title>
            <Subtitle>{this.props.navigation.state.params.type} Chatroom: You are {this.props.navigation.state.params.anonymity} to other users</Subtitle>
          </Body>
          <Right/>
        </Header>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
        <View style={{padding: 5}}>
            <Button small dark 
            onPress={() => this.props.navigation.navigate("Members", 
            {
              name: this.props.navigation.state.params.name,
              anonymity: this.props.navigation.state.params.anonymity, 
              type: this.props.navigation.state.params.type, 
              members: this.props.navigation.state.params.members, 
              page: 'ChatView'})}>
            <Text style={{fontSize: 12}}>View Members</Text>
            </Button>
            </View>
            <View style={{padding: 5}}>
            <Button small danger
            onPress={() => this.setState({showAlert: true})}>
            <Text style={{fontSize: 12}}>Leave "{this.props.navigation.state.params.name}"</Text>
            </Button>
            </View>
            </View>
            <Segment>
              <Button first onPress={() => this.props.navigation.navigate("ForumCard")}>
                <Text>Forum</Text>
              </Button>
              <Button last active onPress={() => this.props.navigation.navigate("ChatHome")}>
                <Text>Chat</Text>
              </Button>
            </Segment>
          {this.chatView()}
          <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                title="Are you sure you want to leave the chatroom?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, I want to leave"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => this.setState({showAlert: false})}
                onConfirmPressed={() => {
                  if (this.props.navigation.state.params.page == 'YourChatList') {
                    this.props.navigation.navigate('YourChatList', {
                      name: this.props.navigation.state.params.name,
                      anonymity: this.props.navigation.state.params.anonymity, 
                      type: this.props.navigation.state.params.type, 
                      members: this.props.navigation.state.params.member, 
                      page: 'ChatView', delete: this.props.navigation.state.params.name})
                  } else if (this.props.navigation.state.params.page == 'ChatList') {
                    this.props.navigation.navigate('ChatList', {
                      name: this.props.navigation.state.params.name,
                      anonymity: this.props.navigation.state.params.anonymity, 
                      type: this.props.navigation.state.params.type, 
                      members: this.props.navigation.state.params.member, 
                      page: 'ChatView', delete: this.props.navigation.state.params.name})
                  } else if (this.props.navigation.state.params.page == 'CreateChat') {
                    this.props.navigation.navigate('YourChatList', {
                      name: this.props.navigation.state.params.name,
                      anonymity: this.props.navigation.state.params.anonymity, 
                      type: this.props.navigation.state.params.type, 
                      members: this.props.navigation.state.params.member, 
                      page: 'ChatView', delete: this.props.navigation.state.params.name})
                  }
                  this.setState({showAlert: false})
                }
                }
                />
         </Container>
    )
  }
}

export default ChatView;

//The bubbles that appear on the left or the right for the messages.
class MessageBubble extends Component {
  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.direction === 'left' ? null : <View style={{width: 70}}/>;
    var rightSpacer = this.props.direction === 'left' ? <View style={{width: 70}}/> : null;

    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;

    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {leftSpacer}
            <View style={bubbleStyles}>
              <Text style={bubbleTextStyle}>
                {this.props.text}
              </Text>
            </View>
            {rightSpacer}
          </View>
      );
  }
}

//The bar at the bottom with a textbox and a send button.
class InputBar extends Component {

  //AutogrowInput doesn't change its size when the text is changed from the outside.
  //Thus, when text is reset to zero, we'll call it's reset function which will take it back to the original size.
  //Another possible solution here would be if InputBar kept the text as state and only reported it when the Send button
  //was pressed. Then, resetInputText() could be called when the Send button is pressed. However, this limits the ability
  //of the InputBar's text to be set from the outside.
  componentWillReceiveProps(nextProps) {
    if(nextProps.text === '') {
      this.autogrowInput.resetInputText();
    }
  }

  render() {
    return (
          <View style={styles.inputBar}>
            <AutogrowInput style={styles.textBox}
                        ref={(ref) => { this.autogrowInput = ref }} 
                        multiline={true}
                        defaultHeight={30}
                        onChangeText={(text) => this.props.onChangeText(text)}
                        onContentSizeChange={this.props.onSizeChange}
                        value={this.props.text}/>
            <TouchableHighlight style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
                <Text style={{color: 'white'}}>Send</Text>
            </TouchableHighlight>
          </View> 
          );
  }
}

//TODO: separate these out. This is what happens when you're in a hurry!
const styles = StyleSheet.create({

  //ChatView

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },

  //InputBar

  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },

  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#66db30'
  },

  //MessageBubble

  messageBubble: {
      borderRadius: 5,
      marginTop: 8,
      marginRight: 10,
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection:'row',
      flex: 1
  },

  messageBubbleLeft: {
    backgroundColor: '#d5d8d4',
  },

  messageBubbleTextLeft: {
    color: 'black'
  },

  messageBubbleRight: {
    backgroundColor: '#66db30'
  },

  messageBubbleTextRight: {
    color: 'white'
  },
})
