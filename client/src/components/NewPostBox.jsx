import React, { Component } from 'react';
import styled from 'styled-components';

class NewPostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value
    }, () => console.log(this.state.value));
  }

  render() {
    const NewPost = styled.div`
      background: white;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 8px;
      box-shadow: 0 8px 5px -5px rgba(33,33,33,0.5);
      > h3 {
        margin-top: 8px;
        margin-bottom: 8px;
        font-weight: normal;
        font-size: 18px;
      }
      > textarea {
        font-size: 16px;
        width: 90%;
        height: 75px;
        border: none;
        resize: none;
      }
    `;

    const PostButtonContainer = styled.div`
      background: #f8f8f8;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #ddd;
      transition: 0.2s ease;
      > button {
        filter: ${this.state.value === '' ? 'brightness(2) saturate(0%) contrast(90%)' : null};
        background: #068484;
        color: white;
        font-size: 12px;
        margin: 8px;
        padding: 3px 12px;
        border: 1px solid #057373;
        border-radius: 3px;
        cursor: ${this.state.value === '' ? 'auto' : 'pointer'};
        transition: all 0.2s ease;
        &:hover {
          background: ${this.state.value === '' ? '#068484' : '#057373'};
          border: ${this.state.value === '' ? '1px solid #057373' : '1px solid #046282'};
        }
      }
    `;

    return (
      <NewPost>
        <h3>New Post</h3>
        <textarea placeholder="What's on your mind?" onChange={ (e) => this.handleChange(e.target.value) }></textarea>
        <PostButtonContainer>
          <button>Post</button>
        </PostButtonContainer>
      </NewPost>
    )
  }
}

export default NewPostBox;
