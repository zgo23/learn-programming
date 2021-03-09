import React from "react";
import type { DispatchUser } from "../shared/Types";

interface LogoutProps {
    user: string;
    dispatch: DispatchUser;
}

export default function Logout({ user, dispatch }: LogoutProps) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "LOGOUT",
                });
            }}
        >
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}
