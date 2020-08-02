import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />


                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/" component={ MarvelScreen } />

                    <Redirect to="/"/>
                </Switch>
            </div>
            
        </Router>
    )
}
