import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar'
import AppDrawer from './components/AppDrawer/AppDrawer'
import { withStyles } from '@material-ui/core';
import styles from './styles'

class DashbooardLayout extends Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {

    const { mobileOpen } = this.state;
    const { classes, children } = this.props;

    return (
      <Fragment>
        <PrimaryAppBar 
          isDrawerOpen = { this.handleDrawerToggle }
        />

        <AppDrawer
          toggleDrawer = { this.handleDrawerToggle }
          mobileOpen = { mobileOpen }/>

        <main className={ classes.content }>
          <div className = {  classes.toolbar } />
          { children }
        </main>
      </Fragment>
    )
  }

}

DashbooardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default  withStyles(styles)(DashbooardLayout);
