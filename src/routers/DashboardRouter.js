import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroeScreen } />


                    <Route exact path="/dc" component={ DcScreen } />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
