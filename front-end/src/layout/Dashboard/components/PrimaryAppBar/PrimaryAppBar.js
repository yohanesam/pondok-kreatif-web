import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar,
         IconButton, 
         InputBase,
         Toolbar,
         withStyles } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../../styles'

class PrimaryAppBar extends Component {

  render() {

    const { classes, isDrawerOpen } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <IconButton 
            color = "inherit" 
            aria-label = "Open drawer"
            onClick = { isDrawerOpen }
            className = { classes.menuButton }>
            <MenuIcon />
          </IconButton>

          <div className = { classes.grow }></div>

          <div className = { classes.search }>
            <div className = { classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase 
              placeholder = "Search Here..."
              classes = {{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}/>
          </div>

          <div className = { classes.grow }></div>
        </Toolbar>
      </AppBar>
    );

  }
  
}

PrimaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(PrimaryAppBar);