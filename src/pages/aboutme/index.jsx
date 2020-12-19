import React from 'react';
import "./style.css";

function Aboutme() {
    return (<div>

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
            <div style={{ height: "10px" }}></div>

            <div className="p-3 mb-3 border border-secondary rounded">

                <div className="row ml-1 mr-1 mbM-2">
                    <div className="lh-100 p-1 mrM-auto">
                        <h5 className="text-uppercase mb-0 text-left-when-desktop-center-when-phone">Spoken languages</h5>
                    </div>
                    <div className="lh-100 pt-0 ml-auto text-right-when-desktop-center-when-phone">
                        <p className="ml-1 mb-0 lh-100 badge badge-success">Native/C</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-warning">Intermediate/B</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-danger">Elemental/A</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-secondary">Studying/Words</p>
                    </div>
                </div>

                <h5 className="mb-0 text-uppercase text-left-when-desktop-center-when-phone">
                    <p className="badge badge-success mb-0">Spanish</p>
                    <p className="badge badge-success mb-0">Catalan</p>
                    <p className="badge badge-warning mb-0">English</p>
                    <p className="badge badge-secondary mb-0">Japanese</p>
                    <p className="badge badge-secondary mb-0">French</p>
                </h5>
            </div>

            <div className="p-3 mb-3 border border-secondary rounded">

                <div className="row ml-1 mr-1 mbM-2">
                    <div className="lh-100 p-1 mrM-auto">
                        <h5 className="text-uppercase mb-0 text-left-when-desktop-center-when-phone">Programming languages &amp; Tools</h5>
                    </div>
                    <div className="lh-100 pt-0 ml-auto text-right-when-desktop-center-when-phone">
                        <p className="ml-1 mb-0 lh-100 badge badge-success">Advanced</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-warning">Middle</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-danger">Begginer</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-secondary">Studying/Elemental</p>
                    </div>
                </div>

                <h5 className="mb-0 text-left-when-desktop-center-when-phone">
                    <p className="badge badge-success mb-0">Java 7/8/11</p>
                    <p className="badge badge-success mb-0">Lombok</p>
                    <p className="badge badge-success mb-0">SSH</p>
                    <p className="badge badge-success mb-0">Bukkit</p>
                    <p className="badge badge-success mb-0">XPath</p>
                    <p className="badge badge-success mb-0">RegEx</p>
                    <p className="badge badge-success mb-0">SpringBoot</p>
                    <p className="badge badge-success mb-0">Hibernate</p>
                    <p className="badge badge-success mb-0">JUnit</p>
                    <p className="badge badge-success mb-0">MySQL</p>
                    <p className="badge badge-success mb-0">Postgres</p>
                    <p className="badge badge-success mb-0">Apache</p>
                    <p className="badge badge-success mb-0">Bash</p>
                    <p className="badge badge-success mb-0">HTML/CSS</p>
                    <p className="badge badge-warning mb-0">C++</p>
                    <p className="badge badge-warning mb-0">C</p>
                    <p className="badge badge-warning mb-0">C#</p>
                    <p className="badge badge-warning mb-0">Mockito</p>
                    <p className="badge badge-warning mb-0">PHP</p>
                    <p className="badge badge-warning mb-0">TypeScript</p>
                    <p className="badge badge-warning mb-0">JavaScript</p>
                    <p className="badge badge-warning mb-0">Bootstrap</p>
                    <p className="badge badge-warning mb-0">NodeJS</p>
                    <p className="badge badge-warning mb-0">ElectronJS</p>
                    <p className="badge badge-warning mb-0">ReactJS</p>
                    <p className="badge badge-warning mb-0">Deno</p>
                    <p className="badge badge-danger mb-0">GO</p>
                    <p className="badge badge-danger mb-0">Android SDK</p>
                    <p className="badge badge-danger mb-0">Python</p>
                    <p className="badge badge-danger mb-0">Pawn</p>
                    <p className="badge badge-danger mb-0">x86 Assembly</p>
                </h5>

            </div>

            <div className="p-3 mb-3 border border-secondary rounded">

                <div className="row ml-1 mr-1 mbM-2">
                    <div className="lh-100 p-1 mrM-auto">
                        <h5 className="text-uppercase mb-0 text-left-when-desktop-center-when-phone">programming concepts</h5>
                    </div>
                    <div className="lh-100 pt-0 ml-auto text-right-when-desktop-center-when-phone">
                        <p className="ml-1 mb-0 lh-100 badge badge-success">Advanced</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-warning">Middle</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-danger">Begginer</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-secondary">Studying/Elemental</p>
                    </div>
                </div>

                <h5 className="mb-0 text-left-when-desktop-center-when-phone">
                    <p className="badge badge-success mb-0">Single Responsability Principle</p>
                    <p className="badge badge-success mb-0">Clean &amp; commented programming</p>
                    <p className="badge badge-success mb-0">Event Driven Programming</p>
                    <p className="badge badge-success mb-0">Microkernel architecture</p>
                    <p className="badge badge-success mb-0">Encapsulation</p>
                    <p className="badge badge-success mb-0">Polymorphism</p>
                    <p className="badge badge-success mb-0">Modular programming</p>
                    <p className="badge badge-success mb-0">Asynchronous programming</p>
                    <p className="badge badge-success mb-0">Cryptography &amp; security</p>
                    <p className="badge badge-success mb-0">Testing</p>
                    <p className="badge badge-success mb-0">Sockets</p>
                    <p className="badge badge-success mb-0">DNS</p>
                    <p className="badge badge-success mb-0">IPv4</p>
                    <p className="badge badge-success mb-0">HTTP</p>
                    <p className="badge badge-success mb-0">SSL</p>
                    <p className="badge badge-success mb-0">Caching</p>
                    <p className="badge badge-success mb-0">L7 Firewall</p>
                    <p className="badge badge-warning mb-0">L3/L4 Firewall</p>
                    <p className="badge badge-warning mb-0">Assembly memory hacking</p>
                    <p className="badge badge-warning mb-0">Memory Hacking</p>
                    <p className="badge badge-warning mb-0">TDD</p>
                </h5>

            </div>

            <div className="p-3 mb-3 border border-secondary rounded">

                <div className="row ml-1 mr-1 mbM-2">
                    <div className="lh-100 p-1 mrM-auto">
                        <h5 className="text-uppercase mb-0 text-left-when-desktop-center-when-phone">Programs &amp; Tools &amp; OS</h5>
                    </div>
                    <div className="lh-100 pt-0 ml-auto text-right-when-desktop-center-when-phone">
                        <p className="ml-1 mb-0 lh-100 badge badge-success">Advanced</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-warning">Middle</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-danger">Begginer</p>
                        <p className="ml-1 mb-0 lh-100 badge badge-secondary">Studying/Elemental</p>
                    </div>
                </div>

                <h5 className="mb-0 text-left-when-desktop-center-when-phone">
                    <p className="badge badge-success mb-0">Git</p>
                    <p className="badge badge-success mb-0">IntelliJ IDEA</p>
                    <p className="badge badge-success mb-0">Visual Studio Code</p>
                    <p className="badge badge-success mb-0">Windows Terminal</p>
                    <p className="badge badge-success mb-0">FileZilla/WinSCP</p>
                    <p className="badge badge-success mb-0">Ubuntu Server 12-20</p>
                    <p className="badge badge-success mb-0">MacOS Mojave-BigSur</p>
                    <p className="badge badge-success mb-0">Windows 7-10</p>
                    <p className="badge badge-warning mb-0">Maven</p>
                    <p className="badge badge-warning mb-0">CLion</p>
                    <p className="badge badge-warning mb-0">Cheat Engine</p>
                    <p className="badge badge-warning mb-0">Adobe Lightroom</p>
                    <p className="badge badge-warning mb-0">Adobe Photoshop</p>
                    <p className="badge badge-warning mb-0">Adobe Premiere</p>
                    <p className="badge badge-warning mb-0">AudaCity</p>
                    <p className="badge badge-warning mb-0">NPM</p>
                    <p className="badge badge-danger mb-0">Visual Studio</p>
                    <p className="badge badge-danger mb-0">Adobe AfterEffects</p>
                    <p className="badge badge-danger mb-0">Android Studio</p>
                    <p className="badge badge-danger mb-0">Unity3D</p>
                </h5>

            </div>
        </div>

        <div style={{ height: "50px" }}></div>
    </div>
    )
}

export default Aboutme;