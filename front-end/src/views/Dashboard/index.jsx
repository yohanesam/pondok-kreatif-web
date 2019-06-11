import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Grid from '@material-ui/core/Grid';

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Custom components
import Budget from './components/Budget';
import Users from './components/Users';
import Progress from './components/Progress';
import Profit from './components/Profit';
import SalesChart from './components/SalesChart';
import DevicesChart from './components/DevicesChart';
import ProductList from './components/ProductList';
import OrdersTable from './components/OrdersTable';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes, authState } = this.props;

    if(!authState.loggedIn) {
      return (
        <Redirect 
          to = "/sign-in"/>
      )
    }

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid
            container
            spacing={32}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Users />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Progress />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Profit />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <SalesChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={12}
              xl={3}
              xs={12}
            >
              <DevicesChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={12}
              xl={3}
              xs={12}
            >
              <ProductList className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <OrdersTable className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  ...state
})

export default compose(
  connect(mapStateToProps, {}),
  withStyles(styles)
)(Dashboard)
