import {useState, useEffect} from 'react'
const useFetch = (url, path, apiKey) => {

    const [data, setData] = useState(null);
    const[isPending, setIsPending]=useState(true);

    const [error, setError] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();
        const headers = { "Content-Type": "application/json" };
        if (apiKey) { headers["X-Master-Key"] = apiKey; }
     
            fetch(url, {
                method: 'GET', // or 'POST', 'PUT', etc. depending on your needs 
                headers: headers,
                singal: abortCont.signal

            })
            .then(res  =>{
                if(!res.ok){
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(blogdata =>{
 
                if(!path){
                    setData(blogdata);
                }
                else if(path === '/blogs'){ 
                    setData(blogdata.record.blogs);
                }
                else if(path.indexOf('/blogs/') !== -1){
                    
                    const pathParts = path.split('/'); 
                    const id = pathParts[2]; 
                    setData(blogdata.record.blogs.find(blog => blog.id === id));
      
                }
        
                setIsPending(false);
                setError(null);
            })
            .catch((e)=>{
                if(e.name ==='AbortError'){
                    console.log('fetch aborted')
                }
                else{
                    setIsPending(false);
                    setError(e.message);
                }

            });
  
        return() => abortCont.abort();
    },[]);
    return{data, isPending, error}
}

export default useFetch;