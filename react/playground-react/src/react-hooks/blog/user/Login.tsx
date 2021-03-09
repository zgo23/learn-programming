import React, { useState } from "react";
import type { ChangeEvent } from "react";
import type { DispatchUser } from "../shared/Types";

interface LoginProps {
    dispatch: DispatchUser;
}

export default function Login({ dispatch }: LoginProps) {
    const [username, setUsername] = useState("");

    function handleUsername(evt: ChangeEvent<HTMLInputElement>) {
        setUsername(evt.target.value);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "LOGIN",
                    username,
                    password: "",
                });
            }}
        >
            <label htmlFor="login-username">Username:</label>
            <input
                type="text"
                name="login-username"
                id="login-username"
                value={username}
                onChange={handleUsername}
            />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input
                type="submit"
                value="Login"
                disabled={username.length === 0}
            />
        </form>
    );
}
