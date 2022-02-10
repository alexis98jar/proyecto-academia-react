import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from 'react-router-dom';

import { Provider } from 'react-redux';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CryptoMarket } from '../components/cryptos/CryptoMarket';
import { store } from '../store/store';
import { RegisterScreen } from '../components/auth/RegisterScreen';


export const AppRouter = () => {
    return (
        <Provider store={ store }>
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/" component={CryptoMarket} />
                        <Route exact path="/register" component={RegisterScreen} />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}
