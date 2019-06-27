import React, { Component } from 'react';

// Externals
import axios from 'axios';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

// Shared components
import Portlet from '../../../../components/Portlet';
import PortletContent from '../../../../components/PortletContent';
import PortletFooter from '../../../../components/PortletFooter';

// Component styles
import styles from './styles';

import { 
  BASE_URL, 
  PROFILE_URI 
} from '../../../../config/Apis';

// Service methods
const getJobList = () => {
  const userState = JSON.parse(localStorage.getItem('userInfoState'))
  return axios({
    method: 'GET',
    url: `${BASE_URL}${PROFILE_URI}${userState.role_user_id}`,
  }).then(result => {
    return result.data;
  });
};

class AccountProfile extends Component {

  state = {
    profileImage: '',
    owner: '',
    umkmName: '',
    umkmType: '',
    serviceError: '',
  }

  componentDidMount = () => {
    this.getUserComponent();
  }

  getUserComponent = async () => {
    try {
      const res = await getJobList();
      this.setState({
        profileImage: res.gambar,
        owner: res.nama_pemilik || "-",
        umkmName: res.nama_usaha,
        umkmType: res.kategori,
      })
    } catch(error) {
      this.setState({
        serviceError: error
      })
    }
  }

  render() {
    const { classes, className, ...rest } = this.props;

    const {
      profileImage,
      owner,
      umkmName,
      umkmType,
    } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">{umkmName}</Typography>
              <Typography
                className={classes.locationText}
                variant="body1"
              >
                Pemilik : {owner}
              </Typography>
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                Kategori : {umkmType}
              </Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src={profileImage}
            />
          </div>
        </PortletContent>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
