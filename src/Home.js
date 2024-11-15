import {useState, useEffect} from 'react';
import  BlogList from './BlogList';
import useFetch from './useFetch';

const Home=() =>{
    const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const [title, setTitle] = useState('welcome to black swan');


  return(
    <div className="centent">
        {error && <div>{error}</div>}
        {isPending && <h2>loading..</h2>}
        {blogs &&  <BlogList blogs={blogs} title={title} />}
  </div>
  );
}
export default Home;