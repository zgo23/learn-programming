import React from "react";

interface PostProps {
    title: string;
    content: string;
    author: string;
}

export default function Post({ title, content, author }: PostProps) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br />
            <i>
                Written by <b>{author}</b>
            </i>
        </div>
    );
}
