import  React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import PasswordListApp from './PasswordListApp';

class HomeApp extends Component {
  render(){
    return (
      <div>
        {(window.localStorage.getItem("user") === null) && <Redirect to={{pathname:'/'}}/>}
        <PasswordListApp/>
      </div>
    )
  }
}

export default HomeApp
