import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList =({blogs, title}) =>{


    return(
        <div className="bloglist"> 
        <h1>{title}</h1>
        {blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>

<Link to={`/blogs/${blog.id}`}>
<h2>{blog.title}</h2>
<p>{blog.body}</p>
</Link>

            </div>
        ))}

    </div>
    );
}
export default BlogList;