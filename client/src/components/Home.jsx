import React, { Component } from 'react';
import NewPostBox from './NewPostBox.jsx';
import Posts from './Posts.jsx';

import styled from 'styled-components';

class Home extends Component {
  render() {
    const HomeWrapper = styled.div`
      padding-top: 55px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      > * {
        align-self: flex-start;
      }
      > *:nth-child(1) {
        flex-basis: 23%;
        position: relative;
        > * {
          width: 23%;
          position: fixed;
          z-index: 150;
        }
      }
      > *:nth-child(2) {
        width: 18px;
      }
      > *:nth-child(3) {
        flex-basis: 43%;
      }
    `;

    return (
      <HomeWrapper>
        <div><NewPostBox /></div>
        <div></div>
        <Posts onProfile={ false }/>
      </HomeWrapper>
    )
  }
}

export default Home;
