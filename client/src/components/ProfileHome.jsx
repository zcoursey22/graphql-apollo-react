import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NewPostBox from './NewPostBox.jsx';
import Posts from './Posts.jsx';

class ProfileHome extends Component {
  render() {
    const Content = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: row;
      padding-top: 8px;
      > #userInfo {
        flex-basis: 450px;
        align-self: flex-start;
      }
      > #postContainer {
        flex-basis: 600px;
        align-self: flex-start;
      }
    `;

    const UserInfo = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;

    const About = styled.div`
      margin: 8px;
      padding: 12px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 8px 5px -5px rgba(0,0,0,0.5);
      > h2 {
        font-size: 20px;
        padding-bottom: 10px;
        > * {
          color: black;
          transition: 0.2s ease;
          &:hover {
            color: #777;
          }
        }
      }
      > ul > li {
        font-size: 14px;
        padding: 8px 0;
      }
    `;

    const Photos = styled.div`
      margin: 8px;
      padding: 12px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 8px 5px -5px rgba(0,0,0,0.5);
      > h2 {
        font-size: 20px;
        padding-bottom: 10px;
        > * {
          color: black;
          transition: 0.2s ease;
          &:hover {
            color: #777;
          }
        }
      }
    `;

    const Friends = styled.div`
      margin: 8px;
      padding: 12px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 8px 5px -5px rgba(0,0,0,0.5);
      > h2 {
        font-size: 20px;
        padding-bottom: 10px;
        > * {
          color: black;
          transition: 0.2s ease;
          &:hover {
            color: #777;
          }
        }
      }
    `;

    const PostContent = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;

    return (
      <Content>
        <UserInfo id="userInfo">
          <About id="about">
            <h2><NavLink to='/profile/about'>About</NavLink></h2>
            <ul>
              <li>Studied Criminology at Florida State University</li>
              <li>Lives in Tallahassee, Florida</li>
              <li>From Keystone Heights, Florida</li>
              <li>In a relationship with Erika Dingman</li>
              <li>Joined November 2018</li>
            </ul>
          </About>

          <Photos id="photos">
            <h2><NavLink to='/profile/photos'>Photos</NavLink></h2>
          </Photos>

          <Friends id="friends">
            <h2><NavLink to='/profile/friends'>Friends</NavLink></h2>
          </Friends>
        </UserInfo>

        <PostContent id="postContainer">
          <NewPostBox id="newPost" />
          <Posts id="posts" onProfile={ true }/>
        </PostContent>
      </Content>
    )
  }
}

export default ProfileHome;
