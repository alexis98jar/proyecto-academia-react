import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CryptoMarket } from '../components/cryptos/CryptoMarket'
import { HomeScreen } from '../components/HomeScreen'
import { LastTry } from '../components/pokemon/LastTry'
import { Footer } from '../components/ui/Footer'
import { Navbar } from '../components/ui/Navbar'

export const DashboarRoutes = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/crypto" component={CryptoMarket} />
                <Route exact path="/pokeapi" component={LastTry} />

                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}
