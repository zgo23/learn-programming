export interface Post {
    title: string;
    content: string;
    author: string;
}

export type SetUser = React.Dispatch<React.SetStateAction<string>>;
export type SetPosts = React.Dispatch<React.SetStateAction<Post[]>>;
