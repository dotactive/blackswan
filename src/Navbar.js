import {useState} from 'react';
const Navbar=() =>{
    const[name, setName] = useState ('mario');
    const[age, setAge] = useState (20);

    const handleClick = (e)  =>{
        setName('luigi');
        console.log('btn text',e);
    }
    const handleParameter = (value,e) =>{
        console.log('click'+value, e.target);
        setAge( 21);

    }

    return(
        <nav className="navbar">
            <h1>{name}  is  {age}</h1>
            <div  className="links">
                <a  style={{color:'white', backgroundColor:'#ccc'}}>home</a><br/>
                <a onClick={handleClick}>click event</a><br/>
                <a onClick={(e) =>handleParameter('rudd',e)}>click with parameter ++ age</a>
            </div>
        </nav>
    );
}
export default Navbar;