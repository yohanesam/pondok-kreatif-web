import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/" component={Dashboard} exact />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
