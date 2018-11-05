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
      }
      > *:nth-child(2) {
        flex-basis: 43%;
      }
    `;

    return (
      <HomeWrapper>
        <NewPostBox />
        <Posts onProfile={ false }/>
      </HomeWrapper>
    )
  }
}

export default Home;
