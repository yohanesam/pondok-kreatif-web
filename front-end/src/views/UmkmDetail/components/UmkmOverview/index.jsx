import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

// Material helpers
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Material components
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// Shared components
import Portlet from '../../../../components/Portlet';
import Paper from '../../../../components/Paper';
import PortletHeader from '../../../../components/PortletHeader';
import PortletLabel from '../../../../components/PortletLabel';
import PortletToolbar from '../../../../components/PortletToolbar';
import PortletContent from '../../../../components/PortletContent';
import PortletFooter from '../../../../components/PortletFooter';

// Chart configuration
import { data, options } from './chart';

// Component styles
import styles from './styles';
import { Avatar } from '@material-ui/core';

class SalesChart extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <CardMedia
          className={classes.imgHeader}
          image="/images/bg.jpg"
        />
        <PortletHeader className={classes.umkmOverviewTitleWrapper}>
            <div className={classes.umkmLogoWrapper}>
              <img 
                className={classes.umkmLogoImage}
                src="/images/products/product_4.png"/>
            </div>
            <div className={classes.umkmDetails}>
              <Typography className={classes.umkmTitle} variant="h2">
                Github
              </Typography>
              <Typography className={classes.umkmOwner} variant="body1">
                Ryan A. B.
              </Typography>
              <Typography className={classes.umkmEmployees} variant="body1">
                200-500 pekerja
              </Typography>
              <Typography className={classes.umkmTimestamp} variant="body1">
                2015
              </Typography>
              <Typography className={classes.umkmAddress} variant="body1">
                Jl. H Abdul Gani RT.001/002 No.03 Cilodong Depok
              </Typography>
            </div>
        </PortletHeader>
        <PortletContent>
          <div className={classes.overviewWrapper}>
            <Typography variant={"h1"}>
              Overview
            </Typography>
            <Typography variant={"body1"}>
              Overview
            </Typography>
          </div>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            Overview <ArrowRightIcon />
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

SalesChart.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SalesChart);
