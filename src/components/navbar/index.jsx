import React from 'react';

function Navbar() {
    return (
        <div className="blog-masthead">
            <div className="container">
                <nav className="nav blog-nav">
                    <a className="nav-link active" href="https://nurio.me/">HOME</a>
                    <a className="nav-link" href="https://nurio.me/projects">PROJECTS</a>
                    <a className="nav-link" href="https://nurio.me/aboutme">ABOUT ME</a>
                    <a className="nav-link" href="https://nurio.me/contact">CONTACT</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;