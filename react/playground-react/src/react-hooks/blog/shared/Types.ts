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
    post: Post;
}

export type PostAction = CreatePostAction;

export interface PostReducer {
    (posts: Post[], action: PostAction): Post[];
}

export type DispatchPost = Dispatch<ReducerAction<PostReducer>>;
