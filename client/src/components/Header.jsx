import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
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
    const Navbar = styled.div`
      background: #068484;
      display: flex;
      justify-content: space-around;
      padding: 3px 0;
      > div {
        display: flex;
        align-items: center;
      }
      > div > input {
        color: #222;
        border-radius: 15px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
        font-size: 14px;
        padding: 5px 15px;
        width: 30vw;
      }
      > div > button {
        color: #222;
        background: #eee;
        border-radius: 15px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: none;
        margin-right: 10px;
        font-size: 14px;
        padding: 5px 10px;
        margin-right: 25px;
        cursor: pointer;
        transition: 0.2s ease;
        > img {
          width: 13px;
        }
        &:hover {
          background: #ddd;
        }
      }

    `;

    const LinkImage = styled(NavLink)`
      text-decoration: none;
      color: white;
      margin: 5px 10px;
      margin-right: 15px;
      > .logo {
        opacity: 1;
        filter: invert(100%);
        transition: 0.2s ease;
        &:hover {
          filter: invert(0%);
        }
      }
      > img {
        filter: invert(100%) brightness(0);
        border-radius: 8%;
        padding-top: 3px;
        width: 25px;
        opacity: 0.6;
        transition: opacity 0.2s ease;
        &:hover {
          opacity: 1;
        }
      }
    `;

    return (
      <Navbar>
        <div>
          <LinkImage to="/"><img className="logo" src="https://png.pngtree.com/svg/20170506/fb_icon_601409.png"></img></LinkImage>
          <input type="text" placeholder="Search" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Simpleicons_Interface_magnifier-1.svg"></img></button>
        </div>
        <div>
          <LinkImage to="/profile"><img src="http://www.kmids.ac.th/wp-content/uploads/2017/10/silhouetteman.png"></img></LinkImage>
          <LinkImage to="/messages"><img src="https://user-images.githubusercontent.com/1915993/32196425-b3e7e484-bdd1-11e7-92ef-b65c5eb8b307.png"></img></LinkImage>
          <LinkImage to="/notifications"><img src="https://png2.kisspng.com/20180410/qtw/kisspng-globe-computer-icons-world-clip-art-free-tag-5acc409f97bf80.6339427515233353276216.png"></img></LinkImage>
        </div>
      </Navbar>
    );
  }
}

export default Header;
