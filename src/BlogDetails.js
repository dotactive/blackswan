import {useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const apiKey = '$2a$10$dahKbjy0qrxovPwGBGu4mO5eWfNYwnxbvHdgkRJuuG3qLfkaKc/Z.';
const url = 'https://api.jsonbin.io/v3/b/6751a19bacd3cb34a8b48a01';
const BlogDetails = () =>{
    const history= useHistory();
    const{id}=useParams();
    const {data:blog, error, isPending} = useFetch(url,`/blogs/${id}`,apiKey);
    const deleteHandler =  () =>{
        fetch(url,{
            
            method:'DELETE',
            headers: {
                "Content-Type": "application/json", 
                "X-Master-Key": apiKey }, 
            body: JSON.stringify({ id }),
        }).then(()=>{
            history.push('/');
        })
    }
    return(
        <div className = "blog-details">
          {isPending  && <div>loading....</div>}
          {error && <div>{error}</div>}
          {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={deleteHandler}>delete</button>
            </article>
          )}
        </div>
    );

}
export default BlogDetails;