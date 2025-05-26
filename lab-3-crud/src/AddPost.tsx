// AddPost.tsx
export default function AddPost() {
    return (
        <div>
            <h2>Add New Post</h2>
            <form>
                <input placeholder="Title" />
                <textarea placeholder="Content" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
