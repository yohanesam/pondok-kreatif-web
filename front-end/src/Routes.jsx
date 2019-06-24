import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UmkmDetail from './views/UmkmDetail';
import JobList from './views/JobList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import AddJob from './views/AddJob';
import Settings from './views/Settings';
import UmkmSignUp from './views/UmkmSignUp';
import TekaSignUp from './views/TekaSignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={JobList}
          exact
          path="/view-pekerjaan"
        />
        <Route
          component={UserList}
          exact
          path="/users"
        />
        <Route
          component={ProductList}
          exact
          path="/products"
        />
        <Route
          component={UmkmDetail}
          exact
          path="/umkm-detail"
        />
        <Route
          component={Typography}
          exact
          path="/typography"
        />
        <Route
          component={Icons}
          exact
          path="/icons"
        />
        <Route
          component={Account}
          exact
          path="/account"
        />
        <Route
          component={AddJob}
          exact
          path="/buat-pekerjaan"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={TekaSignUp}
          exact
          path="/teka-sign-up"
        />
        <Route
          component={UmkmSignUp}
          exact
          path="/umkm-sign-up"
        />
        <Route
          component={UmkmSignUp}
          exact
          path="/umkm-sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
