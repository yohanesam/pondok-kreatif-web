import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlineRounded';
import ShoppingIcon from '@material-ui/icons/ShoppingBasketOutlined';
import LockIcon from '@material-ui/icons/LockOpenOutlined';
import TextIcon from '@material-ui/icons/TextFieldsOutlined';
import ImageIcon from '@material-ui/icons/ImageAspectRatioOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, className, roleId } = this.props;

    const rootClassName = classNames(classes.root, className);

    console.log(classes.nameText);
    

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link
            className={classes.logoLink}
            to="/"
          >
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logos/brainalytica_logo.svg"
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <Avatar
              alt="Roman Kutepov"
              className={classes.avatar}
              src="/images/avatars/avatar_1.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            Roman Kutepov
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            Job Seeker
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
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
                    primary="Beranda"
                />
            </ListItem>

            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/view-pekerjaan"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <ShoppingIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="List Pekerjaan"
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
        </List>
        <Divider className={classes.listDivider} />
        <List
          component="div"
          disablePadding
          subheader={
            <ListSubheader className={classes.listSubheader}>
              Support
            </ListSubheader>
          }
        >
          <ListItem
            className={classes.listItem}
            component="a"
            href="https://devias.io/contact-us"
            target="_blank"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Customer support"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
