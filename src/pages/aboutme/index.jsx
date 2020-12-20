import React from 'react';
import SkillCard from '../../components/SkillCard';
import "./style.css";
import skills from './skills'

const Aboutme = () => {

    const printSkills = () => {
        return skills.map(entry => {
            return (
                <SkillCard
                    key={`skill-card-${entry.name}`}
                    {...entry}
                />
            )
        });
    }

    return (
        <div>

            <div style={{ height: "25px" }}></div>
            <div className="blog-post">

                <h2 className="blog-post-title">ABOUT ME</h2>
                <hr />

                <div className="row text-left-when-desktop-center-when-phone">

                    <div className="col-md-3">
                        <img src="https://i.imgur.com/7a8fGGfm.png" height="240px" className="brs-8" />
                    </div>

                    <div className="col-md-9">
                        <div id="aboutme-header">
                            <p className="blog-post-meta pt-1">
                                Hello! I'm Nurio, a software developer. I'm experienced mainly with <b>Java</b> but I also know a lot of <b>Javascript</b> and <b>PHP</b> among others.
                                Speaking about technologies or tools, I've experienced with <b>NodeJS</b>, <b>ElectronJS</b>, <b>MySQL</b>, <b>SpringBoot/Hibernate</b> among others.
                                The programming concepts that I'm most passionate about are <b>asynchronous</b>, <b>cryptography</b> and <b>sockets</b>. Programming is <b>fun</b> when you have to <b>solve complex puzzles</b>.
                                That's the reason why I love getting obsessed to get the best solution to each problem.
                            </p>
                            <p className="blog-post-meta">My anthem: <i>To see a world in a Grain of Sand, and a Heaven in a Wild Flower, hold Infinity in the palm of your hand, and Eternity in an hour.</i> (William Blake)</p>
                        </div>
                    </div>

                </div>

                <div style={{ height: "20px" }}></div>
                <h2 className="blog-post-title">SKILLS</h2>
                <hr />

                {printSkills()}

                <div style={{ height: "20px" }}></div>

            </div>
        </div>
    );
}

export default Aboutme;