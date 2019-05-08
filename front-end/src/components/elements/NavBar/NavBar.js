import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
      width: 200,
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

class NavBar extends Component {

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {

    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderProfileMenuOption = ( 
      <Menu
        anchorEl = { anchorEl }
        anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
        transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
        open = { isMenuOpen }
        onClose = { this.handleMenuClose }>
        
        <MenuItem onClick = { this.handleMenuClose }>My Account</MenuItem>
        <MenuItem onClick = { this.handleMenuClose }>Logout</MenuItem>

      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl = { anchorEl }
        anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
        transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
        open = { isMobileMenuOpen }
        onClose = { this.handleMenuClose }>

        <MenuItem onClick = { this.handleMobileMenuClose }>
          <IconButton color = "inherit">
            <Badge badgeContent = {3} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>

          <p>Messages</p>
        </MenuItem>

        <MenuItem onClick = { this.handleMobileMenuClose }>
          <IconButton color = "inherit">
            <Badge badgeContent = {3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <p>Notification</p>
        </MenuItem>

        <MenuItem onClick = { this.handleProfileMenuOpen }>
          <IconButton color = "inherit">
            <Badge badgeContent = {3} color="secondary">
              <AccountCircle />
            </Badge>
          </IconButton>

          <p>Profile</p>
        </MenuItem>

      </Menu>
    );

    return (
      <div className = { classes.root }>
        <AppBar position = "static">
          <Toolbar>
            
            <IconButton 
              className = { classes.menuButton } 
              color = "inherit" 
              aria-label = "Open drawer">
              <MenuIcon />
            </IconButton>

            <Typography 
              className = { classes.title } 
              variant = "h6" 
              color = "inherit" 
              noWrap>
              Dasboard
            </Typography>

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

            <div className = { classes.sectionDesktop }>
              <IconButton color = "inherit">
                <Badge badgeContent = {1} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton color = "inherit">
                <Badge badgeContent = {1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton 
                color = "inherit"
                aria-owns = { isMenuOpen ? 'material-appbar' : undefined }
                aria-haspopup = "true"
                onClick = { this.handleProfileMenuOpen }>
                <AccountCircle />
              </IconButton>
            </div>

            <div className = { classes.sectionMobile }>
              <IconButton 
                aria-haspopup = "true" 
                onClick = { this.handleMobileMenuOpen } 
                color = "inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>

        { renderProfileMenuOption }
        { renderMobileMenu }
      </div>
    );

  }
  
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);