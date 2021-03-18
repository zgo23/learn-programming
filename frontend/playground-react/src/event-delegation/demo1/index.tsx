import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import "./style.css";

export default class EventDelegationDemo1 extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "react",
        };
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem>0</ListItem>
                    <ListItem>1</ListItem>
                    <ListItem>2</ListItem>
                    <ListItem>3</ListItem>
                </List>
            </div>
        );
    }
}
