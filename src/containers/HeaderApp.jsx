import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { signout } from '../actions';

class HeaderApp extends Component {

  logout(){
    this.props.logout('logout')
  }

  render(){
    return(
      <div>
        {(this.props.checkUserAuth.logoutStatus === true) && <Redirect to={{pathname:"/"}}/>}
        <AppBar
          title="Snow Password Manager"
          iconClassNameLeft="fa fa-snowflake-o"
          iconElementRight={(localStorage.getItem("user") !== null) && <FlatButton label="LOGOUT" onClick={this.logout.bind(this)}/>}
        />
      </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    checkUserAuth : state.users
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    logout: e => dispatch(signout(e))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(HeaderApp)
