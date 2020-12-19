import React from 'react';

import "./style.css"

//import { faPlusSquare, faSearch, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin, faSteamSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div id="footer" class="container blog-footer">
            <i>Starting from zero is the strength of innovation.</i>
            <div class="footer-link-area">
                <a alt="Twitter Profile" class="footer-link" href="https://twitter.com/nuriofernandez" target="_blank">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>

                <a alt="Instagram Profile" class="footer-link" href="https://www.instagram.com/nuriofernandez/" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>

                <a alt="Linkedin Profile" class="footer-link" href="https://www.linkedin.com/in/nurio-fernandez-muniz" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a alt="Github Profile" class="footer-link" href="https://github.com/xxnurioxx" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a >

                <a alt="MyAnimeList Profile" class="footer-link" href="http://myanimelist.net/profile/xXNurioXx" target="_blank">
                    <img class="img-footer-link" src="https://nurio.me/assets/img/dot.png" width="43.75px" height="43.75px" />
                </a>

                <a alt="Youtube Channel" class="footer-link" href="https://www.youtube.com/channel/UCc5aie-j2C4iAcOQgkSHLEQ" target="_blank">
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>

                <a alt="Steam Profile" class="footer-link" href="https://steamcommunity.com/id/xxnurioxx" target="_blank">
                    <FontAwesomeIcon icon={faSteamSquare} />
                </a>
            </div>
        </div>
    )
}

export default Footer;