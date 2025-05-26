import { useState } from "react";
import { useBlogContext } from "./useBlogContext";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
    const { dispatch } = useBlogContext();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [published, setPublished] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add New Post</h2>
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({
                        type: "CREATE",
                        payload: { title, content, published },
                    });
                    navigate("/blog");
                }}
            >
                <input
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
}
