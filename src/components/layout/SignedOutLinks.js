import React from 'react';
import { NavLink } from 'react-router-dom';
// We use NavLink instead of link because this way we have access to the active class when a certain link is active

// Because this component is not going to have state, we can use a functional component instead of a class component

const SignedOutLinks = () => {
    return ( 
        <ul className="right">
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
        )
}

export default SignedOutLinks;