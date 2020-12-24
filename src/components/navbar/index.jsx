import React from 'react';
import NavLink from '../NavLink';
import SocialLinks from '../SocialNetworksLinks';

import "./style.css";

const Navbar = () => {
    return (
        <div className="blog-masthead">
            <div className="container navbar-container">
                <nav className="nav blog-nav">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/aboutme">ABOUT ME</NavLink>
                </nav>
                <div class="navbar-social-links">
                    <SocialLinks size="40" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;