import React from "react";
import type { SetUser } from "../shared/Types";

interface LogoutProps {
    user: string;
    setUser: SetUser;
}

export default function Logout({ user, setUser }: LogoutProps) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setUser("");
            }}
        >
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}
