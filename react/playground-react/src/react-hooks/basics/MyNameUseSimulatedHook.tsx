import React from "react";
import type { ChangeEvent } from "react";
import renderApp from "../../renderApp";

interface SetState<T> {
    (nextValue: T): void;
}

let values: any[] = [];
let currentHook = 0;

function useState<T>(initialState: T): [T, SetState<T>] {
    if (typeof values[currentHook] === "undefined") {
        values[currentHook] = initialState;
    }

    let hookIndex = currentHook;
    function setState(nextValue: T) {
        values[hookIndex] = nextValue;
        renderApp();
    }

    return [values[currentHook++], setState];
}

function MyName() {
    currentHook = 0;

    const [enableFirstName, setEnableFirstName] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value);
    }

    function handleLastNameChange(evt: ChangeEvent<HTMLInputElement>) {
        setLastName(evt.target.value);
    }

    function handleEnableChange(evt: ChangeEvent<HTMLInputElement>) {
        setEnableFirstName(!enableFirstName);
    }

    return (
        <div>
            <h1>
                My name is: {enableFirstName ? name : ""} {lastName}
            </h1>
            <input
                type="checkbox"
                checked={enableFirstName}
                onChange={handleEnableChange}
            />
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
