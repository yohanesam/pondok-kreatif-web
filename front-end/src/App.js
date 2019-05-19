import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Routes from './Routes'

const styles = {
    root: {
      display: 'flex',
    },
};

class App extends Component {

    render() {

        const { classes } = this.props;

        return (
            <BrowserRouter>
                <div className = { classes.root }>
                    <Routes />
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
