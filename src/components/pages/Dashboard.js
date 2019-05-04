import React, { Component } from 'react';
import TopSideBar from '../elements/TopSideBar/TopSideBar'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import EventItem from '../elements/EventItem/EventItem'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <TopSideBar />
          <HeroImage />
          <SearchBar />
          <EventItem />
      </div>
    )
  }
}
