// BlogDetail.tsx
import { useParams, Link } from "react-router-dom";
import { useBlogContext } from "./useBlogContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BlogDetail() {
    const { id } = useParams();
    const { blogs, dispatch } = useBlogContext();
    const navigate = useNavigate();
    const blog = blogs.find((b) => b.id === id);
    if (!blog)
        return (
            <div className="max-w-xl mx-auto mt-12 p-8 bg-gradient-to-br from-purple-100 via-yellow-100 to-indigo-100 rounded-2xl shadow-2xl text-center text-indigo-400 font-fantasy border-4 border-yellow-400">
                Blog not found
            </div>
        );
    return (
        <div className="max-w-xl mx-auto mt-12 p-10 bg-gradient-to-br from-yellow-100 via-purple-100 to-indigo-100 rounded-2xl shadow-2xl border-4 border-yellow-400 font-fantasy">
            <h2 className="text-4xl font-extrabold mb-4 text-purple-900 drop-shadow-lg tracking-widest">
                {blog.title}
            </h2>
            <p className="text-lg text-indigo-800 mb-8 whitespace-pre-line tracking-wide drop-shadow-sm">
                {blog.content}
            </p>
            <div className="flex gap-6 justify-center">
                <Link to={`/blog/edit/${id}`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-300 text-purple-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-400 transition-transform border-2 border-yellow-700">
                        Edit
                    </button>
                </Link>
                <button
                    className="px-6 py-2 bg-gradient-to-r from-purple-700 to-indigo-700 text-yellow-200 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-purple-800 transition-transform border-2 border-yellow-700"
                    onClick={() => {
                        dispatch({ type: "DELETE", payload: { id: blog.id } });
                        toast.success("Blog deleted");
                        navigate("/blog");
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
