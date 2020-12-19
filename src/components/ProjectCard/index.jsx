import React from 'react'

function ProjectCard(props) {
    return (
        <section style={{ margin: "50px 0px" }}>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-md-7">
                            <a href={props.link} target="_blank">
                                <div className="card-img-bottom img-project-banner" style={
                                    {
                                        color: "#fff",
                                        minHeight: "20rem",
                                        height: "100%",
                                        background: `url('${props.image}') center no-repeat`,
                                        backgroundSize: "cover"
                                    }}></div>
                            </a>
                        </div>
                        <div className="col-md-5">
                            <div className="card-block" style={{
                                padding: "38px",
                                minHeight: "20rem"
                            }}>
                                <h4 className="card-title">{props.title}</h4>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProjectCard;