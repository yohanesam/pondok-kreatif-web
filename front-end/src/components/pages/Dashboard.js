import React, { Component } from 'react';
import NavBar from '../elements/NavBar/NavBar'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import EventItem from '../elements/EventItem/EventItem'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <HeroImage />
          <SearchBar />
          <EventItem />
      </div>
    )
  }
}
