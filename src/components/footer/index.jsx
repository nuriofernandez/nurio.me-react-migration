import React from 'react';

import "./style.css"

//import { faPlusSquare, faSearch, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin, faSteamSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import SocialLinks from '../SocialNetworksLinks';

const Footer = () => {
    return (
        <div id="footer" className="container blog-footer">
            <i>Starting from zero is the strength of innovation.</i>
            <div className="footer-link-area">
                <SocialLinks size="50" />
            </div>
        </div>
    )
}

export default Footer;