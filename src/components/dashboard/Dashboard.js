import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';

class Dashboard extends Component {
    render () {
        // console.log(this.props)
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ projects } />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )

    }
};

// col s12 m6 gives 12 columns on small screens and 6 in medium size screens!


const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

// Connect is a function that returns a higher order component to take on the Dashboard
export default connect(mapStateToProps)(Dashboard);