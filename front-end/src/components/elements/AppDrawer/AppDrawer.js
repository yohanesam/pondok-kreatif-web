import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider,
         Drawer,
         Hidden, 
         IconButton,
         List,
         ListItem,
         ListItemIcon,
         ListItemText,
         withStyles } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircleTwoTone';
import DashBoardIcon from '@material-ui/icons/DashboardTwoTone';
import MailIcon from '@material-ui/icons/MailTwoTone';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import MoreIcon from '@material-ui/icons/ListOutlined';

const drawerWidth = 64;

const styles = theme => ({
    
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
    },

});

class AppDrawer extends Component {
    
    render() {

        const { classes, 
                theme, 
                container, 
                mobileOpen, 
                toggleDrawer } = this.props;

        const renderResponsiveDrawer = (
            <Fragment>
                <div className = { classes.toolbar } />

                <Divider />

                <List>
                    <ListItem button >
                        <ListItemIcon><DashBoardIcon /></ListItemIcon>
                    </ListItem>
                </List>

                <List>
                    <ListItem button >
                        <ListItemIcon><MoreIcon /></ListItemIcon>
                    </ListItem>
                </List>

                <List>
                    <ListItem button >
                        <ListItemIcon><MailIcon /></ListItemIcon>
                    </ListItem>
                </List>

                <List>
                    <ListItem button >
                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                    </ListItem>
                </List>

                <Divider />
                
                <List>
                    <ListItem button >
                        <ListItemIcon><AccountCircle /></ListItemIcon>
                    </ListItem>
                </List>
            </Fragment>
        );
        
        return(
            <nav className = { classes.drawer }>
                <Hidden smUp implementation = "css">
                    <Drawer
                        container = { container }
                        variant = "temporary"
                        anchor = { theme.direction === 'rtl' ? 'right' : 'left' }
                        open = { mobileOpen }
                        onClose = { toggleDrawer }
                        classes = {{ paper: classes.drawerPaper, }}>
                    { renderResponsiveDrawer }
                    </Drawer>
                </Hidden>
                
                <Hidden xsDown implementation = "css">
                    <Drawer
                        classes = {{ paper: classes.drawerPaper, }}
                        variant = "permanent"
                        open>
                    { renderResponsiveDrawer }
                    </Drawer>
                </Hidden>
            </nav>
        );

    }

}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool,
}

export default withStyles(styles, { withTheme: true })(AppDrawer)
