import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

// Externals
import { Chart } from 'react-chartjs-2';

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles';

// ChartJS helpers
import { draw } from './helpers/chartjs';

// Theme
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

// Routes
import Routes from './Routes';

// The store configuration
import configureStore from './store';

// Browser history
const browserHistory = createBrowserHistory();

// Configure ChartJS
Chart.helpers.extend(Chart.elements.Rectangle.prototype, { draw });

export default class App extends Component {
  render() {
    return (
      <Provider store = { configureStore() }>
        <MuiThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
