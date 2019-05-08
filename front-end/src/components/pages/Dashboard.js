import React, { Component } from 'react';
import PrimaryAppBar from '../elements/PrimaryAppBar/PrimaryAppBar'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import EventItem from '../elements/EventItem/EventItem'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <PrimaryAppBar />
          <HeroImage />
          <SearchBar />
          <EventItem />
      </div>
    )
  }
}
