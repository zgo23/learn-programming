import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import type { SetUser } from "../shared/Types";

interface UserBarProps {
    user: string;
    setUser: SetUser;
}

export default function UserBar({ user, setUser }: UserBarProps) {
    if (user) {
        return <Logout user={user} setUser={setUser} />;
    } else {
        return (
            <React.Fragment>
                <Login setUser={setUser} />
                <Register setUser={setUser} />
            </React.Fragment>
        );
    }
}
