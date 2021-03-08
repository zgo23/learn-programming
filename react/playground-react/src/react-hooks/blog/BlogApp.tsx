import React, { useState } from "react";

import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";

import type { Post } from "./shared/Types";

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
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState(defaultPosts);

    return (
        <div style={{ padding: 8 }}>
            <UserBar user={user} setUser={setUser} />
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
