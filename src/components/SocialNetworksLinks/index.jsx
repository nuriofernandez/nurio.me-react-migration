import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin, faSteamSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import "./style.css";

const SocialLinks = ({ size }) => {
    const imgSize = size * 0.875;
    return (
        <div>
            <a alt="Twitter Profile" style={{ fontSize: `${size}px` }} className="social-link" href="https://twitter.com/nuriofernandez" target="_blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
            </a>

            <a alt="Instagram Profile" style={{ fontSize: `${size}px` }} className="social-link" href="https://www.instagram.com/nuriofernandez/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare} />
            </a>

            <a alt="Linkedin Profile" style={{ fontSize: `${size}px` }} className="social-link" href="https://www.linkedin.com/in/nurio-fernandez-muniz" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a alt="Github Profile" style={{ fontSize: `${size}px` }} className="social-link" href="https://github.com/xxnurioxx" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a >

            <a alt="MyAnimeList Profile" style={{ fontSize: `${size}px` }} className="social-link" href="http://myanimelist.net/profile/xXNurioXx" target="_blank">
                <img className="img-social-link" src="https://nurio.me/assets/img/dot.png" width={`${imgSize}px`} height={`${imgSize}px`} />
            </a>

            <a alt="Youtube Channel" style={{ fontSize: `${size}px` }} className="social-link" href="https://www.youtube.com/channel/UCc5aie-j2C4iAcOQgkSHLEQ" target="_blank">
                <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>

            <a alt="Steam Profile" style={{ fontSize: `${size}px` }} className="social-link" href="https://steamcommunity.com/id/xxnurioxx" target="_blank">
                <FontAwesomeIcon icon={faSteamSquare} />
            </a>
        </div>
    )
};

export default SocialLinks;