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
        <div className="max-w-xl mx-auto mt-12 p-10 bg-gradient-to-br from-yellow-100 via-purple-100 to-indigo-100 rounded-2xl shadow-2xl border-4 border-yellow-400 font-fantasy">
            <h2 className="text-3xl font-extrabold mb-8 text-purple-900 drop-shadow-lg tracking-widest">
                Add New Spell
            </h2>
            <form
                className="space-y-6"
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
                    className="w-full border-2 border-yellow-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-yellow-50 text-lg font-fantasy"
                    placeholder="Spell Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full border-2 border-yellow-400 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-yellow-50 text-lg font-fantasy"
                    placeholder="Spell Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label className="flex items-center gap-2 text-purple-900 font-bold">
                    <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) => setPublished(e.target.checked)}
                    />
                    Published
                </label>
                <button
                    className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-purple-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-400 transition-transform border-2 border-yellow-700 text-xl tracking-widest"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
}
