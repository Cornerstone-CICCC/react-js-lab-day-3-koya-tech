import { createContext } from "react";
import type { Blog, BlogAction } from "./BlogContext";
import type { Dispatch } from "react";

export const BlogContext = createContext<
    { blogs: Blog[]; dispatch: Dispatch<BlogAction> } | undefined
>(undefined);
