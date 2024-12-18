import {useState, useEffect} from 'react';
import  BlogList from './BlogList';
import useFetch from './useFetch';

const Home=() =>{
    const{data: blogs, isPending, error} = useFetch('https://api.jsonbin.io/v3/b/6751a19bacd3cb34a8b48a01','/blogs','$2a$10$dahKbjy0qrxovPwGBGu4mO5eWfNYwnxbvHdgkRJuuG3qLfkaKc/Z.');
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