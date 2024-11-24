import {Link} from 'react-router-dom';

const Navbar=() =>{


    return(
        <nav className="navbar">
            <h1>blackSwan</h1>
            <div  className="links">
                <Link to="/blackswan">Home</Link>
                <Link to="/blackswan/Create">New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;