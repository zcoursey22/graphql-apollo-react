import React, { Component } from 'react';
import styled from 'styled-components';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false
    };
  }

  render() {
    const PostDiv = styled.div`
      background: white;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 100%;
      margin: 18px 0;
      &:nth-of-type(1) {
        margin-top: 0;
      }
      box-shadow: 0 8px 5px -5px rgba(0,0,0,0.5);
      > p {
        padding: 3px 15px;
        padding-top: 15px;
      }
    `;

    const UserDiv = styled.div`
      background: #f8f8f8;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      position: relative;
      > img {
        width: 40px;
        border-right: 1px solid #ddd;
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
      }
      div > h4 {
        color: #068484;
      }
      > div > span {
        font-size: 13px;
        color: #777;
      }
      > button {
        border: none;
        background: none;
        cursor: pointer;
        position: absolute;
        top: 3px;
        bottom: 0;
        right: 12px;
        > img {
          cursor: pointer;
          filter: contrast(30%);
          width: 18px;
          transition: 0.2s ease;
          &:hover {
            filter: contrast(100%);
          }
        }
    `;

    const InteractionDiv = styled.div`
      padding: 5px;
      > button:nth-of-type(1) {
        margin-left: 8px;
      }
      > button {
        cursor: pointer;
        color: #aaa;
        font-size: 14px;
        font-family: sans-serif;
        font-weight: 900;
        background: none;
        border: none;
        margin: 2px 3px;
        padding: 2px 3px;
        transition: 0.2s ease;
        &:hover {
          filter: brightness(80%);
        }
      }
      > #shareButton {
        float: right;
        margin-right: 5px;
      }
    `;

    const Popup = styled.div`
      background: white;
      border: 1px solid #ddd;
      position: absolute;
      top: 35px;
      right: -25px;
      width: 200px;
      box-shadow: 0 8px 5px -5px rgba(0,0,0,0.5);
      display: ${this.state.popupOpen === true ? 'block' : 'none'}
      > ul > li {
        cursor: pointer;
        padding: 8px;
        transition: 0.2 ease;
        &:hover {
          background: #f8f8f8;
        }
      }
    `;

    return (
      <div style={{ position: 'relative' }}>
        <PostDiv>
          <UserDiv>
            <img src={this.props.post.user.picture}></img>
            <div>
              <h4>{this.props.post.user.name}</h4>
              <span>{this.props.post.time}</span>
            </div>
            <button onClick={ () => this.setState({ popupOpen: !this.state.popupOpen }) }><img src="https://image.flaticon.com/icons/svg/61/61099.svg"></img></button>
          </UserDiv>
          <p>{this.props.post.text}﻿</p>
          <InteractionDiv>
            <button>Like</button>
            <button>Comment</button>
            <button id="shareButton">Share</button>
          </InteractionDiv>
        </PostDiv>

        <Popup><ul>
          <li>Hide post</li>
          <li>Report</li>
        </ul></Popup>
      </div>
    )
  }
}

export default Post;
