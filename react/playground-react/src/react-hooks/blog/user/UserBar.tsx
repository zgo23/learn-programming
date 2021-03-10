import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import type { AppDispatch } from "../shared/Types";

interface UserBarProps {
    user: string;
    dispatch: AppDispatch;
}

export default function UserBar({ user, dispatch }: UserBarProps) {
    if (user) {
        return <Logout user={user} dispatch={dispatch} />;
    } else {
        return (
            <React.Fragment>
                <Login dispatch={dispatch} />
                <Register dispatch={dispatch} />
            </React.Fragment>
        );
    }
}
