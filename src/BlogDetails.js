import {useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () =>{
    const history= useHistory();
    const{id}=useParams();
    const {data:blog, error, isPending} =  useFetch('http://localhost:8000/blogs/'+id);
    const deleteHandler =  () =>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
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