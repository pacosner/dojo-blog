import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => { history.push('/') })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" required />

                <label>Blog body:</label>
                <textarea onChange={(e) => setBody(e.target.value)} required></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button >Add Blog</button>
            </form>

        </div>
    );
}

export default Create;