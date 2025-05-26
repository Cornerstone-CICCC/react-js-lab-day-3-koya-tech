import { useContext } from "react";
import { BlogContext } from "./BlogContextInstance";

export function useBlogContext() {
    const ctx = useContext(BlogContext);
    if (!ctx)
        throw new Error("useBlogContext must be used within BlogProvider");
    return ctx;
}
