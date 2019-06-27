import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

// Externals
import axios from 'axios'
import compose from 'recompose/compose'
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Custom components
// import ApplicationToolbar from './components/ApplicationToolbar';
import ApplicationsTable from './components/ApplicationsTable';

// Component styles
import styles from './style';

// URL 
import { 
  BASE_URL, 
  QUEUE_URI 
} from '../../config/Apis';

// Service methods
const getApplicantList = (params) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}${QUEUE_URI}?id=${params}`,
  }).then(result => {
    return result.data;
  });
};

class ApplicantList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 10,
    applicantList: [],
    selectedJobs: [],
    error: null
  };

  async getApplicantList() {
    try {
      this.setState({ isLoading: true });

      const { limit } = this.state;
      
      const applicantList = await getApplicantList(this.props.match.params.jobId);
      console.log(applicantList.data.length);
      
      if (this.signal) {
        this.setState({
          isLoading: false,
          applicantList
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getApplicantList();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSelect = selectedJobs => {
    this.setState({ selectedJobs });
  };

  renderApplicants() {
    const { classes } = this.props;
    const { isLoading, applicantList, error } = this.state;
    console.log(applicantList.data.length);
    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <Typography variant="h6">{error}</Typography>;
    }

    if (applicantList.data.length === 0) {
      return <Typography variant="h6">There are no jobs</Typography>;
    }

    // return (
    //   <ApplicationsTable
    //     //
    //     onSelect={this.handleSelect}
    //     jobs={applicantList}
    //   />
    // );
  }

  render() {
    const { classes } = this.props;
    const { selectedJobs } = this.state;
    return (
      <DashboardLayout title="List Pelamar">
        <div className={classes.root}>
          {/* <JobsToolbar selectedJobs={selectedJobs} /> */}
          <div className={classes.content}>{this.renderApplicants()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

ApplicantList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(ApplicantList);
