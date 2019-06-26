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

// Shared services
import { getUsers } from '../../services/user';

// Custom components
import JobsToolbar from './components/JobsToolbar';
import JobsTable from './components/JobsTable';

// Component styles
import styles from './style';

// URL 
import { 
  BASE_URL, 
  JOB_URI 
} from '../../config/Apis';

// Service methods
const getJobList = () => {
  const userState = JSON.parse(localStorage.getItem('userInfoState'))
  return axios({
    method: 'GET',
    url: `${BASE_URL}${JOB_URI}?id=${userState.role_user_id}`,
  }).then(result => {
    return result.data;
  });
};

class UserList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 10,
    jobList: [],
    users: [],
    selectedUsers: [],
    error: null
  };

  async getJobList() {
    try {
      this.setState({ isLoading: true });

      const { limit } = this.state;
      // const { users } = await getUsers(limit);
      const jobList = await getJobList();
      console.log(jobList);
      
      if (this.signal) {
        this.setState({
          isLoading: false,
          jobList
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
    const { isLoggedin, history } = this.props;

    if(!isLoggedin){
      history.push("/sign-in")
    } else {
      this.signal = true;
      this.getJobList();
    }
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSelect = selectedUsers => {
    this.setState({ selectedUsers });
  };

  renderUsers() {
    const { classes } = this.props;
    const { isLoading, jobList, error } = this.state;

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

    if (jobList.length === 0) {
      return <Typography variant="h6">There are no users</Typography>;
    }

    return (
      <JobsTable
        //
        onSelect={this.handleSelect}
        users={jobList}
      />
    );
  }

  render() {
    const { classes } = this.props;
    const { selectedUsers } = this.state;

    return (
      <DashboardLayout title="List Pekerjaan">
        <div className={classes.root}>
          <JobsToolbar selectedUsers={selectedUsers} />
          <div className={classes.content}>{this.renderUsers()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

UserList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(UserList);
