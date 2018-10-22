import React, { Component } from 'react';
import { NavLink, Switch, Route } from "react-router-dom";

import NewPostBox from './NewPostBox.jsx';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Zach Coursey</h1>
        <NavLink to='/profile/about'>About</NavLink>
        <NavLink to='/profile/friends'>Friends</NavLink>
        <NavLink to='/profile/photos'>Photos</NavLink>
        <NewPostBox />
      </div>
    )
  }
}

export default Profile;
