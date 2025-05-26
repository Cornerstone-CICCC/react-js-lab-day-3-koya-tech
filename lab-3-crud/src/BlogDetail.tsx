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
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center text-gray-400">
                Blog not found
            </div>
        );
    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">
                {blog.content}
            </p>
            <div className="flex gap-4">
                <Link to={`/blog/edit/${id}`}>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                        Edit
                    </button>
                </Link>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
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
