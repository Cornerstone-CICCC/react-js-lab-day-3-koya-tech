// BlogList.tsx
import { Link } from "react-router-dom";
import { useBlogContext } from "./useBlogContext";

export default function BlogList() {
    const { blogs } = useBlogContext();
    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-gradient-to-br from-yellow-100 via-purple-100 to-indigo-100 rounded-2xl shadow-2xl border-4 border-yellow-400 font-fantasy">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-extrabold text-purple-900 drop-shadow-lg tracking-widest">
                    Spellbook of Posts
                </h2>
                <Link to="/blog/new">
                    <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-300 text-purple-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-400 transition-transform border-2 border-yellow-700">
                        Create
                    </button>
                </Link>
            </div>
            <ul className="space-y-6">
                {blogs.length === 0 && (
                    <li className="text-indigo-400 italic">
                        No magical posts yet.
                    </li>
                )}
                {blogs.map((post) => (
                    <li
                        key={post.id}
                        className="border-b-2 border-yellow-300 pb-4 flex items-center justify-between"
                    >
                        <Link
                            to={`/blog/${post.id}`}
                            className="text-xl font-bold text-indigo-800 hover:text-yellow-700 transition-colors tracking-wide drop-shadow"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
