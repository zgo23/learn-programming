import type { Dispatch, ReducerAction } from "react";

/* Types for the user feature */
type UserState = string;

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
    (state: UserState, action: UserAction): string;
}

/* Types for the posts feature */
type PostsState = Post[];

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
    (posts: PostsState, action: PostsAction): Post[];
}

/* Types for application */
export interface AppState {
    user: UserState;
    posts: PostsState;
}
export type AppAction = UserAction | PostsAction;
export interface AppReducer {
    (state: AppState, action: AppAction): AppState;
}
export type AppDispatch = Dispatch<ReducerAction<AppReducer>>;
