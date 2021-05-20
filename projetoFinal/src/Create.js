import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Josha");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="create">
                    <h2>Criar novo blog</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Título do blog:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Descrição:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Imagens:</label>
                        <input
                            multiple    
                            type="file"
                        />
                        <label>Autor:</label>
                        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                            <option value="Taliso">Taliso</option>
                            <option value="Josha">Josha</option>
                        </select>
                        { !isPending && <button>Criar</button> }
                        { isPending && <button disabled>Cagando...</button> }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;