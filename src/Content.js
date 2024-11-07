import {useState, useEffect} from 'react';
import  BlogList from './BlogList';

const Content=() =>{

    const[isPending, setIsPending]=useState(true);
    const [title, setTitle] = useState('welcome to black swan');
    const [error, setError] = useState(null);
    //    name,  functionName  = useState  (value)
    
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    
    // ]);
    const [blogs, setBlogs] = useState(null);
    // const handleD = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !==id);
    //     setBlogs(newBlogs);
    //     setTitle('swan blogs');
    // }
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res  =>{
                if(!res.ok){
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(data =>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e)=>{
                setIsPending(false);
                setError(e.message);
            });
        },2000);
    },[]);
  return(
    <div className="centent">
        {error && <div>{error}</div>}
{isPending && <h2>loading..</h2>}
    {blogs &&  <BlogList blogs={blogs} title={title} />}

  </div>
  );
}
export default Content;