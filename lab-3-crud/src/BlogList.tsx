// BlogList.tsx
import { Link } from "react-router-dom";
import { useBlogContext } from "./useBlogContext";

export default function BlogList() {
    const { blogs } = useBlogContext();
    return (
        <div>
            <h2>Blog Listing</h2>
            <ul>
                {blogs.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/blog/new">
                <button>Create</button>
            </Link>
        </div>
    );
}
