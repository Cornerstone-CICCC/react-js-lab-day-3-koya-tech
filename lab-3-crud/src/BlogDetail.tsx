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
    if (!blog) return <div>Blog not found</div>;
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link to={`/blog/edit/${id}`}>
                <button>Edit</button>
            </Link>
            <button
                onClick={() => {
                    dispatch({ type: "DELETE", payload: { id: blog.id } });
                    toast.success("Blog deleted");
                    navigate("/blog");
                }}
                style={{ marginLeft: 8 }}
            >
                Delete
            </button>
        </div>
    );
}
