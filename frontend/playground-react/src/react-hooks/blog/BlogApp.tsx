import React, { useReducer, useEffect } from "react";

import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";

import type { Post } from "./shared/Types";
import appReducer from "./reducers";

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

export default function BlogApp() {
    const [{ user, posts }, dispatch] = useReducer(appReducer, {
        user: "",
        posts: defaultPosts,
    });

    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`;
        } else {
            document.title = "React Hooks Blog";
        }
    }, [user]);

    return (
        <div style={{ padding: 8 }}>
            <UserBar user={user} dispatch={dispatch} />
            <br />
            {user && (
                <CreatePost user={user} posts={posts} dispatch={dispatch} />
            )}
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
    );
}