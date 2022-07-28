import React from 'react';
import {Link} from "react-router-dom";
import cl from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/about'}>About us</Link>
            </div>
        </div>
    );
};

export default Navbar;