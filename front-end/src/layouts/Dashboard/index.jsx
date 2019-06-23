import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Material components
import Drawer from '@material-ui/core/Drawer';

// Custom components
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

// Component styles
import styles from './styles';

class DashboardLayout extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width);

    this.state = {
      isOpen: !isMobile,
      isLoggedin: false,
      role_id: "",
    };
  }

  componentDidMount() {
    this.checkIfUserLogin();
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  checkIfUserLogin = () => {
    const { history } = this.props;
    if(localStorage.getItem('userInfoState')) {
      const state = JSON.parse(localStorage.getItem('userInfoState'));

      if(state.isLoggedin) {
        this.setState({ isLoggedin: state.isLoggedin });
      } else {
        history.push('/sign-in');
      }
    } else {
      history.push('/sign-in');
    }
    
  }

  render() {
    const { classes, width, title, children } = this.props;
    const { isOpen, role_id } = this.state;

    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          <Sidebar 
            className={classes.sidebar} 
            roleId={role_id}/>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

export default compose(
  withRouter,
  withStyles(styles),
  withWidth()
)(DashboardLayout);
