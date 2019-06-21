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

class UmkmRoutes extends Component {

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
            to="/icons"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Icons and Images"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/account"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <AccountBoxOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Account"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/settings"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Settings"
                />
            </ListItem>
        </List>
    );
  }
}

UmkmRoutes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UmkmRoutes);
