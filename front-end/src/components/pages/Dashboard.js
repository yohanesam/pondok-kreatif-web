import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import EventItem from '../elements/EventItem/EventItem'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class Dashboard extends Component {

  render() {

    const { classes } = this.props;

    return (
      <main className = { classes.content }>
        <div className = { classes.toolbar }>
          <HeroImage />
          <SearchBar />
          <EventItem />
        </div>
      </main>
    )
  }
  
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard);
