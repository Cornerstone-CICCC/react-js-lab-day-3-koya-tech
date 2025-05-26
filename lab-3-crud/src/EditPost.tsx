// EditPost.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useBlogContext } from "./useBlogContext";
import { useState } from "react";

export default function EditPost() {
    const { id } = useParams();
    const { blogs, dispatch } = useBlogContext();
    const blog = blogs.find((b) => b.id === id);
    const navigate = useNavigate();
    const [title, setTitle] = useState(blog?.title || "");
    const [content, setContent] = useState(blog?.content || "");
    const [published, setPublished] = useState(blog?.published || false);

    if (!blog)
        return (
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center text-gray-400">
                Blog not found
            </div>
        );

    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({
                        type: "UPDATE",
                        payload: { ...blog, title, content, published },
                    });
                    navigate(`/blog/${blog.id}`);
                }}
            >
                <input
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) => setPublished(e.target.checked)}
                    />
                    Published
                </label>
                <button
                    className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
