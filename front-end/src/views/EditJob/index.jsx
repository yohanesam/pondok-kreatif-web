import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Grid from '@material-ui/core/Grid';

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Custom components
import JobForm from './components/JobForm';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class EditJob extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Edit Pekerjaan">
        <div className={classes.root}>
          <Grid
            container
          >
            <JobForm />
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

EditJob.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditJob);
