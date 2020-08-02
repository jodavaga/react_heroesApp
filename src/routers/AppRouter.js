import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    {/* Dashboar router. no exact */}
                    <Route path="/" component={ DashboardRouter } />
                </Switch>
            </div>
            
        </Router>
    )
}
