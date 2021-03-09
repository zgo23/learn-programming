import type { Dispatch, ReducerAction } from "react";

export interface Post {
    title: string;
    content: string;
    author: string;
}

export type SetPosts = React.Dispatch<React.SetStateAction<Post[]>>;

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
