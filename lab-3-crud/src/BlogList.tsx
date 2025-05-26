// BlogList.tsx
import { Link } from "react-router-dom";
import { useBlogContext } from "./useBlogContext";

export default function BlogList() {
    const { blogs } = useBlogContext();
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Blog Listing</h2>
                <Link to="/blog/new">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Create
                    </button>
                </Link>
            </div>
            <ul className="space-y-4">
                {blogs.length === 0 && (
                    <li className="text-gray-400">No posts yet.</li>
                )}
                {blogs.map((post) => (
                    <li
                        key={post.id}
                        className="border-b pb-3 flex items-center justify-between"
                    >
                        <Link
                            to={`/blog/${post.id}`}
                            className="text-lg font-medium text-blue-700 hover:underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
