import type {
    UserAction,
    UserReducer,
    PostsAction,
    PostsReducer,
    AppAction,
    AppReducer,
} from "./shared/Types";

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

const postsReducer: PostsReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_POST":
            const { title, content, author } = action;
            const newPost = {
                title,
                content,
                author,
            };
            return [newPost, ...state];
        default:
            throw new Error();
    }
};

function isUserAction(action: AppAction): action is UserAction {
    return (
        action.type === "LOGIN" ||
        action.type === "REGISTER" ||
        action.type === "LOGOUT"
    );
}

function isPostsAction(action: AppAction): action is PostsAction {
    return action.type === "CREATE_POST";
}

const appReducer: AppReducer = (state, action) => {
    return {
        user: isUserAction(action)
            ? userReducer(state.user, action)
            : state.user,
        posts: isPostsAction(action)
            ? postsReducer(state.posts, action)
            : state.posts,
    };
};

export default appReducer;
