import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Messages from './components/Messages.jsx';
import Notifications from './components/Notifications.jsx';
import About from './components/About.jsx';
import Friends from './components/Friends.jsx';
import Photos from './components/Photos.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profile' component={Profile}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/notifications' component={Notifications}/>
          <Route path='/profile/about' component={About}></Route>
          <Route path='/profile/friends' component={Friends}></Route>
          <Route path='/profile/photos' component={Photos}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
