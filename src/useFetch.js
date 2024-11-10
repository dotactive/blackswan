import {useState, useEffect} from 'react'
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const[isPending, setIsPending]=useState(true);

    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {singal: abortCont.signal})
            .then(res  =>{
                if(!res.ok){
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(blogdata =>{
                setData(blogdata);
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
        },500);
        return() => abortCont.abort();
    },[]);
    return{data, isPending, error}
}

export default useFetch;