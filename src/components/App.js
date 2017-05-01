import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginApp from '../containers/LoginApp';
import HeaderApp from '../containers/HeaderApp';
import HomeApp from '../containers/HomeApp';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderApp />
          <Route exact path="/" component={LoginApp}/>
          <Route path="/home" component={HomeApp}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
