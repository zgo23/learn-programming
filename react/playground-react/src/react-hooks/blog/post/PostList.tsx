import React from "react";
import Post from "./Post";

interface PostListProps {
    posts?: any[];
}

export default function PostList({ posts = [] }: PostListProps) {
    return (
        <div>
            {posts.map((p, i) => (
                <React.Fragment key={"post-" + i}>
                    <Post {...p} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
}
