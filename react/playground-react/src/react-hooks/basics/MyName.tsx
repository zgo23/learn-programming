import React from "react";
import type { ChangeEvent } from "react";

interface MyNameProps {}
interface MyNameState {
    name: string;
}

class MyName extends React.Component<MyNameProps, MyNameState> {
    constructor(props: MyNameProps) {
        super(props);
        this.state = {
            name: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt: ChangeEvent<HTMLInputElement>) {
        this.setState({ name: evt.target.value });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>My name is: {name}</h1>
                <input type="text" value={name} onChange={this.handleChange} />
            </div>
        );
    }
}

export default MyName;
