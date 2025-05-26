import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { BlogContext } from "./BlogContextInstance";
import type { ReactNode } from "react";

export type Blog = {
    id: string;
    title: string;
    content: string;
    published: boolean;
};

export type BlogAction =
    | { type: "CREATE"; payload: Omit<Blog, "id"> }
    | { type: "UPDATE"; payload: Blog }
    | { type: "DELETE"; payload: { id: string } };

function blogReducer(state: Blog[], action: BlogAction): Blog[] {
    switch (action.type) {
        case "CREATE":
            return [...state, { ...action.payload, id: uuidv4() }];
        case "UPDATE":
            return state.map((blog) =>
                blog.id === action.payload.id ? { ...action.payload } : blog
            );
        case "DELETE":
            return state.filter((blog) => blog.id !== action.payload.id);
        default:
            return state;
    }
}

export function BlogProvider({ children }: { children: ReactNode }) {
    const [blogs, dispatch] = useReducer(blogReducer, []);
    return (
        <BlogContext.Provider value={{ blogs, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
}
