import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
    render() {
        var isActive = false; // TODO : Redux implementation
        var className = isActive ? 'nav-link active' : 'nav-link';

        return (
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}


export default NavLink;