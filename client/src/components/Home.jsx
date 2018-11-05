import React, { Component } from 'react';
import NewPostBox from './NewPostBox.jsx';
import Posts from './Posts.jsx';

import styled from 'styled-components';

class Home extends Component {
  render() {
    const HomeWrapper = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: row;
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
        <Posts />
      </HomeWrapper>
    )
  }
}

export default Home;
