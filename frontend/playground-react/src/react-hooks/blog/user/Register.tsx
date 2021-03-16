import React, { useState } from "react";
import type { ChangeEvent } from "react";
import type { AppDispatch } from "../shared/Types";

interface RegisterProps {
    dispatch: AppDispatch;
}

export default function Register({ dispatch }: RegisterProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    function handleUsername(evt: ChangeEvent<HTMLInputElement>) {
        setUsername(evt.target.value);
    }

    function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
        setPassword(evt.target.value);
    }

    function handlePasswordRepeat(evt: ChangeEvent<HTMLInputElement>) {
        setPasswordRepeat(evt.target.value);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "REGISTER",
                    username,
                    password,
                    passwordRepeat,
                });
            }}
        >
            <label htmlFor="register-username">Username:</label>
            <input
                type="text"
                name="register-username"
                id="register-username"
                value={username}
                onChange={handleUsername}
            />
            <label htmlFor="register-password">Password:</label>
            <input
                type="password"
                name="register-password"
                id="register-password"
                value={password}
                onChange={handlePassword}
            />
            <label htmlFor="register-password-repeat">Password:</label>
            <input
                type="password"
                name="register-password-repeat"
                id="register-password-repeat"
                value={passwordRepeat}
                onChange={handlePasswordRepeat}
            />
            <input
                type="submit"
                value="Register"
                disabled={
                    username.length === 0 ||
                    password.length === 0 ||
                    password !== passwordRepeat
                }
            />
        </form>
    );
}
