import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Dashboard from '../pages/Dashboard';
import PrimaryAppBar from '../elements/PrimaryAppBar/PrimaryAppBar'

const styles = {
    root: {
      width: 'flex',
    },
};

class App extends Component {

    render() {

        const { classes } = this.props;

        return (
            <BrowserRouter>
                <div className = { classes.root }>
                    <PrimaryAppBar />
                    <Switch>
                        <Route path="/" component={Dashboard} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
