import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const className = isActive ? 'nav-link active' : 'nav-link';

    return (
        <Link className={className} {...props}>
            {props.children}
        </Link>
    );
}

export default NavLink;