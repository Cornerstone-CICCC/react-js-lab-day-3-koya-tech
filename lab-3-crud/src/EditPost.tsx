// EditPost.tsx
import { useParams } from "react-router-dom";

export default function EditPost() {
    const { id } = useParams();
    return (
        <div>
            <h2>Edit Post {id}</h2>
            <form>
                <input placeholder="Title" />
                <textarea placeholder="Content" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
