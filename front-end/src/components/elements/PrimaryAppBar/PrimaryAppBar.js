import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar,
         Badge,
         CssBaseline,
         IconButton, 
         InputBase,
         Menu,
         MenuItem,
         Typography,
         Toolbar,
         withStyles } from '@material-ui/core';
         
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone';
import DashBoardIcon from '@material-ui/icons/DashboardTwoTone'
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/MailTwoTone';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import MoreIcon from '@material-ui/icons/MoreVertTwoTone';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppDrawer from '../AppDrawer/AppDrawer';

const drawerWidth = 64;

const styles = theme => ({
  root: {
    width: 'flex',
  },

  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },

  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

});

class PrimaryAppBar extends Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {

    const { mobileOpen } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
          <Toolbar>
            <IconButton 
              color = "inherit" 
              aria-label = "Open drawer"
              onClick = { this.handleDrawerToggle }
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
        
        <AppDrawer
          toggleDrawer = { this.handleDrawerToggle }
          mobileOpen = { mobileOpen }/>
      </Fragment>
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