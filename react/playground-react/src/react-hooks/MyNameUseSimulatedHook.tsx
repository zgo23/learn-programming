import React from "react";
import type { ChangeEvent } from "react";
import renderApp from "../renderApp";

interface SetState {
    (nextValue: string): void;
}

let value: string;

function useState(initialState: string): [string, SetState] {
    if (typeof value === "undefined") {
        value = initialState;
    }

    function setState(nextValue: string) {
        value = nextValue;
        renderApp();
    }

    return [value, setState];
}

function MyName() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value);
    }

    function handleLastNameChange(evt: ChangeEvent<HTMLInputElement>) {
        setLastName(evt.target.value);
    }

    return (
        <div>
            <h1>
                My name is: {name} {lastName}
            </h1>
            <input type="text" value={name} onChange={handleChange} />
            <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
            />
        </div>
    );
}

export default MyName;
