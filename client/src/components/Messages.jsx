import React, { Component } from 'react';
import styled from 'styled-components';

class Messages extends Component {
  render() {
    const MessagesContainer = styled.div`
      display: flex;
    `;

    const MessageList = styled.div`
      border: 1px solid red;
    `;

    const MessageListImg = styled.img`
      width: 55px;
      border-radius: 50%;
    `;

    const CurrentMessages = styled.div`
      > ul > li:nth-child(2n) {
        background: #eee;
      }
      border: 1px solid blue;
    `;

    const CurrentMessageImg = styled.img`
      width: 30px;
      border-radius: 50%;
    `;

    return (
      <MessagesContainer>

        <MessageList>
          <ul>
            <li><div>
              <MessageListImg src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"></MessageListImg>
              <h4>Bradley Collins</h4>
            </div></li>
            <li><div>
              <MessageListImg src="http://www.women-speaker-foundation.de/dokumentablage/P1759/001759_profil.jpg"></MessageListImg>
              <h4>Erika Dingman</h4>
            </div></li>
            <li><div>
              <MessageListImg src="http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Rory-Macrae.jpg"></MessageListImg>
              <h4>Jake Calhoun</h4>
            </div></li>
          </ul>
        </MessageList>

        <CurrentMessages>
          <ul>
            <li><div>
              <CurrentMessageImg src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"></CurrentMessageImg>
              <span>Okay</span>
            </div></li>
            <li><div>
              <CurrentMessageImg src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"></CurrentMessageImg>
              <span>Wow!</span>
            </div></li>
            <li><div>
              <CurrentMessageImg src="http://profilepicturesdp.com/wp-content/uploads/2018/06/best-profile-pictures-men-2.jpg"></CurrentMessageImg>
              <span>Hey Brad!</span>
            </div></li>
            <li><div>
              <CurrentMessageImg src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"></CurrentMessageImg>
              <span>Blah blah blah</span>
            </div></li>
          </ul>
        </CurrentMessages>

      </MessagesContainer>
    )
  }
}

export default Messages;
