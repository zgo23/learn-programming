import React, { useState, useReducer } from "react";

import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";

import type { UserReducer, Post } from "./shared/Types";

const defaultPosts: Post[] = [
    {
        title: "React Hooks",
        content: "The greatest thing since sliced bread!",
        author: "Daniel Bugl",
    },
    {
        title: "Using React Fragments",
        content: "Keeping the DOM tree clean!",
        author: "Daniel Bugl",
    },
];

/* Replace the user global state with reducer hook*/

const userReducer: UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            throw new Error();
    }
};

export default function BlogApp() {
    const [user, dispatchUser] = useReducer(userReducer, "");
    const [posts, setPosts] = useState(defaultPosts);

    return (
        <div style={{ padding: 8 }}>
            <UserBar user={user} dispatch={dispatchUser} />
            <br />
            {user && (
                <CreatePost user={user} posts={posts} setPosts={setPosts} />
            )}
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
    );
}
