import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    const path = localStorage.getItem('lastPath');
    console.log(path)
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to={path} /> )
                    : ( <Component { ...props } /> ) 
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
