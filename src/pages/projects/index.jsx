import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import "./style.css";

function Projects() {
    return (
        <div id="projects">
            <div className="mobile-adapt">
                <ProjectCard
                    image="https://i.imgur.com/FSZib8a.png"
                    title="GLAUCUS"
                >
                    <p className="card-text">Account system, notifications and privacy control. Also, it's the brand of all my projects.</p>
                    <a href="https://glacusu.net" target="_blank" className="btn btn-primary mt-1">Go to the site</a>
                </ProjectCard>

                <ProjectCard
                    image="https://i.imgur.com/T3Nz0ps.png"
                    title="MINECRAFT SERVER LIST"
                >
                    <p className="card-text">Minecraft server list website with statistics and an automated servers search system.</p>
                    <a href="https://www.minecraftserverslist.net/" target="_blank" className="btn btn-primary mt-1">Go to the site</a>
                </ProjectCard>

                <ProjectCard
                    image="https://i.imgur.com/ECYSnm8.png"
                    title="ADS LINK SKIPER"
                >
                    <p className="card-text">Google Chrome extension that allows you to skip link shorteners such as adf.ly, owo.io, sh.st and much more.</p>
                    <a
                        href="https://chrome.google.com/webstore/detail/ads-link-skipper/bkpeohkfimdfogdnpcnokjkbpankkmil"
                        target="_blank" className="btn btn-primary mt-1"
                    >
                        Go to the site
                    </a>
                </ProjectCard>

                <ProjectCard
                    image="https://i.imgur.com/UGfi8Fb.png"
                    title="Minecraft servers"
                >
                    <p className="card-text">
                        Minecraft it's a sandbox game that allow users to create they own gamemodes.
                        For a few years I created and owned a lot of servers.
                    </p>
                    <p className="card-text">
                        <b>NexusCraft</b>, <b>Lunatium</b>, <b>OceaNet</b>, <b>TempestPvP</b>, <b>EnergyPvP</b>, <b>MineGrech</b> and <b>Glaucus Network</b>.
	                </p>
                    <p className="card-text">
                        I got more than <b>700 online</b> simultaneous players and more than <b>one million</b> registered players.
                    </p>
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects;