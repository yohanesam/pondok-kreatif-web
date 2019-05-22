import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './views/Dashboard';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from = "/" to = "/dashboard"/>
        <Route component = { Dashboard } exact path = "/dashboard"/>
      </Switch>
    )
  }
}
