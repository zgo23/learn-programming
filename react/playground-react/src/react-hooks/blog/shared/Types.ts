import type { Dispatch, ReducerAction } from "react";

/* Types for the user feature */
interface LoginAction {
    type: "LOGIN";
    username: string;
    password: string;
}

interface RegisterAction {
    type: "REGISTER";
    username: string;
    password: string;
    passwordRepeat: string;
}

interface LogoutAction {
    type: "LOGOUT";
}

export type UserAction = LoginAction | RegisterAction | LogoutAction;

export interface UserReducer {
    (state: string, action: UserAction): string;
}

export type DispatchUser = Dispatch<ReducerAction<UserReducer>>;

/* Types for the post feature */
export interface Post {
    title: string;
    content: string;
    author: string;
}

interface CreatePostAction {
    type: "CREATE_POST";
    title: string;
    content: string;
    author: string;
}

export type PostsAction = CreatePostAction;

export interface PostsReducer {
    (posts: Post[], action: PostsAction): Post[];
}

export type DispatchPosts = Dispatch<ReducerAction<PostsReducer>>;
