import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import axios from 'axios';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// Shared components
import SearchInput from '../../../../components/SearchInput';

// Component styles
import styles from './styles';

// URL 
import { 
  BASE_URL, 
  DESTROY_JOB_URI 
} from '../../../../config/Apis';

// Service methods
const deleteJobList = (request) => {
  return axios({
    method: 'POST',
    url: `${BASE_URL}${DESTROY_JOB_URI}`,
    data: request,
  });
};


class JobsToolbar extends Component {
  
  handleEditJob = () => {
    const { selectedJobs, history } = this.props;
    if(sessionStorage.getItem('jobId')){
      sessionStorage.removeItem('jobId');
    }
    sessionStorage.setItem('jobId', JSON.stringify({
      id: selectedJobs[0],
    }));

    history.push('/edit-pekerjaan');
  }

  handleAddJob = () => {
    const { history } = this.props;
    history.push('/buat-pekerjaan');
  }

  handleDeleteJob = async () => {
    const { selectedJobs, history } = this.props;
    try {
      await deleteJobList(selectedJobs);
    } catch (error) {
      console.log(error);
      
    }
    
    history.replace('/view-pekerjaan');
  }

  render() {
    const { classes, className, selectedJobs } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {selectedJobs.length > 0 && (
            <IconButton
              className={classes.deleteButton}
              onClick={this.handleDeleteJob}
            >
              <DeleteIcon />
            </IconButton>
          )}
          {selectedJobs.length === 1 && (
            <Button 
              className={classes.EditButton}
              color="primary"
              size="small"
              variant="outlined"
              onClick={this.handleEditJob}
            >
              Edit Pekerjaan
            </Button>
          )}
          <Link href="/buat-pekerjaan">
            <Button 
              color="primary"
              size="small"
              variant="outlined"
              onClick={this.handleAddJob}
            >
              Tambah Pekerjaan
            </Button>
          </Link>
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search user"
          />
          <span className={classes.spacer} />
        </div>
      </div>
    );
  }
}

JobsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedJobs: PropTypes.array
};

JobsToolbar.defaultProps = {
  selectedJobs: []
};

export default compose(
  withRouter,
  withStyles(styles)
)(JobsToolbar);
