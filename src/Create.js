import { useState } from "react";
import {useHistory}  from "react-router-dom"

const Create = () =>{
    const[title, setTitle]= useState('');
    const[body, setBody]= useState('');
    const[author, setAuthor]= useState('mario');
    const[isPending, setIsPending]=useState(false);
    const history= useHistory();

    const backward = ()=>{
        history.go(-1);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog={title,body,author};
        // blog is an Object

        setIsPending(true);
        fetch('https://api.jsonbin.io/v3/b/6738828ead19ca34f8cb06e3',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$dahKbjy0qrxovPwGBGu4mO5eWfNYwnxbvHdgkRJuuG3qLfkaKc/Z."
            },
            body :JSON.stringify(blog)
        }).then(()=>{
            console.log('blog added');
            setIsPending(false);
            history.push('/');
        })
    }
    return(
        <div className="create">
        <h2>add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>blog title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>blog body:</label>
            <textarea
                onChange={(e)=> setBody(e.target.value)}
                required
            ></textarea>
            <label>author:</label>
            <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
            </select>
            {isPending  &&  <div>adding...</div>}
            {!isPending  &&   <button>add blog</button>}
           
        </form>
        <button onClick={backward}>go  back</button>
        </div>
    );
}
export default Create;