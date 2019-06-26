import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import axios from 'axios';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core/styles/index';

// Material components
import Grid from '@material-ui/core/Grid/index';
import Button from '@material-ui/core/Button/index';
import CircularProgress from '@material-ui/core/CircularProgress/index';
import IconButton from '@material-ui/core/IconButton/index';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Shared components
import FacebookIcon from '../../icons/Facebook';
import GoogleIcon from '../../icons/Google';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

// URL 
import { 
  BASE_URL, 
  LOGIN_URI 
} from '../../config/Apis';

// Service methods
const signIn = (request) => {
  return axios({
    method: 'POST',
    url: `${BASE_URL}${LOGIN_URI}`,
    data: {
      "email": request.email,
      "password": request.password
    },
  });
};

class SignIn extends Component {
  state = {
    values: {
      email: '',
      password: ''
    },
    touched: {
      email: false,
      password: false
    },
    errors: {
      email: null,
      password: null
    },
    isValid: false,
    isLoading: false,
    submitError: null,
    serviceError: ''
  };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignIn = async () => {
    try {
      const { history } = this.props;
      const { values } = this.state;

      this.setState({ isLoading: true, serviceError: '' });

      const res = await signIn({ email: values.email, password: values.password });
      console.log(res.data);
      if (res.data.role_id == 2) {
        console.log("benar");
        localStorage.setItem('userInfoState', JSON.stringify({
          role_id: res.data.role_id,
          role_user_id:  res.data.role_user_id,
          token: res.data.token,
        }));

        history.push('/beranda');
      } else {
        console.log("salah");
        this.setState({
          isLoading: false,
          serviceError: "Tenaga Kerja tidak Boleh Masuk"
        });
      }
    } catch (res) {
      this.setState({
        isLoading: false,
        serviceError: "Koneksi Error, Silahkan coba lagi"
      });
    }
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      serviceError,
      isLoading,
    } = this.state;

    const showEmailError = touched.email && errors.email;
    const showPasswordError = touched.password && errors.password;

    return (
      
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteWrapper}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    Takamaru Ayako
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}
                >
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    variant="body1"
                  >
                    Sign in with social media
                  </Typography>
                  <Button
                    className={classes.facebookButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained"
                  >
                    <FacebookIcon className={classes.facebookIcon} />
                    Login with Facebook
                  </Button>
                  <Button
                    className={classes.googleButton}
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained"
                  >
                    <GoogleIcon className={classes.googleIcon} />
                    Login with Google
                  </Button>
                  <Typography
                    className={classes.sugestion}
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      type="text"
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.password[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography
                      className={classes.submitError}
                      variant="body2"
                    >
                      {submitError}
                    </Typography>
                  )}
                  {serviceError && (
                      <Typography
                        className={classes.submitError}
                        variant="body2"
                      >
                        {serviceError}
                      </Typography>
                    )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                    
                  ) : (
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  )}
                  <Typography
                    className={classes.signUp}
                    variant="body1"
                  >
                    Tidak punya akun ? Daftar {' '} 
                    
                    <Link
                      className={classes.signUpUrl}
                      to="/umkm-sign-up"
                    >
                      disini
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
