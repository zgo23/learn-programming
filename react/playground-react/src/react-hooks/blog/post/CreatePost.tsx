import React, { useState } from "react";
import type { ChangeEvent } from "react";
import type { Post, DispatchPost } from "../shared/Types";

interface CreatePostProps {
    user: string;
    posts: Post[];
    dispatch: DispatchPost;
}

export default function CreatePost({ user, posts, dispatch }: CreatePostProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitle(evt: ChangeEvent<HTMLInputElement>) {
        setTitle(evt.target.value);
    }

    function handleContent(evt: ChangeEvent<HTMLTextAreaElement>) {
        setContent(evt.target.value);
    }

    function handleCreate() {
        const newPost: Post = {
            title,
            content,
            author: user,
        };
        dispatch({
            type: "CREATE_POST",
            post: newPost,
        });
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleCreate();
                setTitle("");
                setContent("");
            }}
        >
            <div>
                Author: <b>{user}</b>
            </div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input
                    type="text"
                    name="create-title"
                    id="create-title"
                    value={title}
                    onChange={handleTitle}
                />
            </div>
            <textarea value={content} onChange={handleContent} />
            <input type="submit" value="Create" />
        </form>
    );
}
