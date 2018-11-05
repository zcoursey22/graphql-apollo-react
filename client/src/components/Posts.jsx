import React, { Component } from 'react';
import Post from './Post.jsx';
import styled from 'styled-components';
const sampleData = require("../../../sampleData.js");

class Posts extends Component {
  render() {
    const PostsWrapper = styled.ul`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 8px;
      > li {
        width: 100%;
      }
    `;

    const allPosts = sampleData.posts.map((post, i) => {
      return (
        <li key={ "post" + i }>
          <Post post={ post }></Post>
        </li>
      );
    });

    return (
      <div>
        <PostsWrapper>
          { allPosts }
        </PostsWrapper>
      </div>
    )
  }
}

export default Posts;
