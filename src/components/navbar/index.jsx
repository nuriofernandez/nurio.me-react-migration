import React from 'react';
import NavLink from '../NavLink';

const Navbar = () => {
    return (
        <div className="blog-masthead">
            <div className="container">
                <nav className="nav blog-nav">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/aboutme">ABOUT ME</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;