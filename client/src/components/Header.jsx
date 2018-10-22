import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
  render() {
    const Navbar = styled.div`
      background: #4267b2;
      display: flex;
      align-items: center;
      padding: 0 100px;
      > input {
        color: #222;
        border-radius: 15px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
        font-size: 14px;
        padding: 5px 15px;
        width: 400px;
      }
      > button {
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
        > img {
          width: 13px;
        }
      }

    `;

    const LinkImage = styled(NavLink)`
      text-decoration: none;
      color: white;
      padding: 5px 10px;
      margin-right: 10px;
      &:hover {
        background: rgba(0,0,0,0.2);
      }
      .logo {
        filter: invert(100%) brightness(5);
        &:hover {
          background: rgba(0,0,0,0);
        }
      }
      > img {
        filter: invert(100%) brightness(0);
        border-radius: 8%;
        padding-top: 3px;
        width: 25px;
      }
    `;

    return (
      <Navbar>
        <LinkImage to="/"><img className="logo" src="https://png.pngtree.com/svg/20170506/fb_icon_601409.png"></img></LinkImage>
        <input type="text" placeholder="Search"></input>
        <button><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Simpleicons_Interface_magnifier-1.svg"></img></button>
        <LinkImage to="/profile"><img src="http://www.kmids.ac.th/wp-content/uploads/2017/10/silhouetteman.png"></img></LinkImage>
        <LinkImage to="/messages"><img src="https://user-images.githubusercontent.com/1915993/32196425-b3e7e484-bdd1-11e7-92ef-b65c5eb8b307.png"></img></LinkImage>
        <LinkImage to="/notifications"><img src="https://png2.kisspng.com/20180410/qtw/kisspng-globe-computer-icons-world-clip-art-free-tag-5acc409f97bf80.6339427515233353276216.png"></img></LinkImage>
      </Navbar>
    );
  }
}

export default Header;
