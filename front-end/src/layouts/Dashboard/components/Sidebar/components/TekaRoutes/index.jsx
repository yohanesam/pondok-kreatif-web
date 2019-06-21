import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlineRounded';
import ShoppingIcon from '@material-ui/icons/ShoppingBasketOutlined';
import LockIcon from '@material-ui/icons/LockOpenOutlined';
import TextIcon from '@material-ui/icons/TextFieldsOutlined';
import ImageIcon from '@material-ui/icons/ImageAspectRatioOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

// Component styles
import styles from '../../styles';

class TekaRoutes extends Component {

  render() {
    const { classes } = this.props;

    return (
        <List
        component="div"
        disablePadding
        >
            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Dashboard"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/users"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Users"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/products"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <ShoppingIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Products"
                />
            </ListItem>
            
            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/sign-in"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <LockIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Authentication"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/typography"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <TextIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Typography"
                />
            </ListItem>
        </List>
    );
  }
}

TekaRoutes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TekaRoutes);
