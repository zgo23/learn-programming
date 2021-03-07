import React from "react";

interface LogoutProps {
    user: string;
}

export default function Logout({ user }: LogoutProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}
