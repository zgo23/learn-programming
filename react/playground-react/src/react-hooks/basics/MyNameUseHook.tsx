import React, { useState } from "react";
import type { ChangeEvent } from "react";

function MyName() {
    const [name, setName] = useState("");

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value);
    }

    return (
        <div>
            <h1>My name is: {name}</h1>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    );
}

export default MyName;
