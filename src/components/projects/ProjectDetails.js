import React from 'react'

// We need to use the props (note that React-router already passes down some props by default to make the route)
const ProjectDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - { id }
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam quia culpa vitae dolor blanditiis sit eum quam nihil perspiciatis esse eos, saepe quas, velit temporibus nobis, beatae nulla neque!</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by Dani Prol</div>
                    <div>6th March, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
