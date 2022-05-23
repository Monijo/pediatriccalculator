import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"

function NavBar(props) {
    return(
        <header className="navbar">
            <Link to="/">
                LOGO
            </Link>
            <Link to="/login"> Login</Link>
            </header>
    )

}

export default NavBar;
