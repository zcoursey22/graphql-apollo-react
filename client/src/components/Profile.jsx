import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProfileHome from './ProfileHome.jsx';

class Profile extends Component {
  render() {
    const ProfileWrapper = styled.div`
      padding: 8px 0;
      padding-top: 48px;
      display: flex;
      flex-direction: column;
    `;

    const UserHeader = styled.div`
      height: 375px;
      position: relative;
      > h1 {
        font-size: 36px;
        z-index: 100;
        bottom: 30px;
        left: 350px;
        color: white;
        position: absolute;
      }
      > #profilePic {
        border-radius: 50%
        position: absolute;
        left: 25px;
        bottom: 25px;
        z-index: 99;
        height: 300px;
        width: 300px;
        background-image: url("https://pbs.twimg.com/profile_images/1034993683664273408/yRX07Kna_400x400.jpg");
        background-size: cover;
        background-position: center;
        border: 6px solid white;
      }
      > #coverPic {
        position: absolute;
        height: 375px;
        overflow: hidden;
        background-image: url("http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_Bigsur_T2_CC_BigSurBeach_Miller-1280x642.jpg");
        background-size: cover;
        background-position: center;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        width: 100%;
      }
      > #vignette {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(-172deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.9));
      }
    `;

    const NavButtons = styled.div`
      display: flex;
      justify-content: center;
      background: white;
      border: 1px solid #ddd;
      > button:nth-of-type(1) {
        border-left: 1px solid #ddd;
      }
      > button {
        flex-basis: 150px;
        font-size: 16px;
        border: none;
        border-right: 1px solid #ddd;
        transition: 0.2s ease;
        &:hover {
          background: #eee;
        }
        > * {
          color: black;
          font-weight: 700;
          display: block;
          padding: 12px;
        }
      }
    `;

    return (
      <ProfileWrapper>

        <UserHeader>
          <h1>Zach Coursey</h1>
          <div id="profilePic"></div>
          <div id="coverPic"></div>
          <div id="vignette"></div>
        </UserHeader>

        <NavButtons>
          <button><NavLink to='/profile'>Home</NavLink></button>
          <button><NavLink to='/profile/about'>About</NavLink></button>
          <button><NavLink to='/profile/photos'>Photos</NavLink></button>
          <button><NavLink to='/profile/friends'>Friends</NavLink></button>
          <button><NavLink to='/profile/settings'>More</NavLink></button>
        </NavButtons>

        <Switch>
          <Route exact path='/profile' component={ProfileHome}/>
        </Switch>

      </ProfileWrapper>
    )
  }
}

export default Profile;
