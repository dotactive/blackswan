import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound=()=>{
    return(
        <div className="notfound">
        <h2>page not found</h2>
        <Link to="/"> go back to home</Link>
        </div>
    )
         
}
export default NotFound;