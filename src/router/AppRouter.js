import React, { useEffect } from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from 'react-router-dom';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboarRoutes } from './DashboarRoutes';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const {checking, uid} = useSelector( state => state.auth );

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
            <Router>
                    <Switch>
                        <PublicRoute 
                            exact 
                            path="/login" 
                            component={LoginScreen} 
                            isAuthenticated= {!!uid}    
                        />
                        <PublicRoute 
                            exact 
                            path="/register" 
                            component={RegisterScreen} 
                            isAuthenticated={!!uid}    
                        />
                        <PrivateRoute 
                            path="/" 
                            component={DashboarRoutes} 
                            isAuthenticated={!!uid}
                        />

                        <Redirect to="/" />
                    </Switch>
            </Router>

    );
}
