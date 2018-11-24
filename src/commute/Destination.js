import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Start Location", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: [{ title: "Start Location", content: "Lorem ipsum dolor sit amet" },
                        { title: "Destination", content: "Lorem ipsum dolor sit amet" }
                    ]  

        }
    }
    render() {
        return (
        //   <Container>
            // <Header />
            <Content padder>
            <Accordion dataArray={this.state.dataArray} icon="add" expandedIcon="remove" />
            </Content>
        //   </Container>
        );
    }
}