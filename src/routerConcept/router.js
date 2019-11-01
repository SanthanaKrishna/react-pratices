import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import Home from './Home';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/componentA' component={ComponentA} />
                    <Route path='/componentB' component={ComponentB} />
                    <Route path='/componentC' component={ComponentC} />
                </Switch>
            </Router>
        </div>
    )
}