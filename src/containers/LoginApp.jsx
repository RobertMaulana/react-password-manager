import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardText} from 'material-ui/Card';
import { signinUser } from '../actions';
import {  Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

const fieldUsername = ({input}) => (
  <TextField
    floatingLabelText="Username"
    type="text"
    {...input}
    fullWidth={true}
  />
)

const fieldPassword = ({input}) => (
  <TextField
    floatingLabelText="Password"
    type="password"
    {...input}
    fullWidth={true}
  />
)

const styles = {
  titleStyle: {
    textAlign: 'center'
  },
  login: {
    width: '600px',
    margin: 'auto',
    paddingTop: '20px'
  },
  btnStyle: {
    textAlign: 'center'
  },
  fontSizeLogo: {
    fontSize: '100px',
    marginTop: '20px',
    marginBottom: '-10px',
    color: 'rgb(0, 188, 212)'
  }
}

class LoginApp extends Component {

  handleFormSubmit({username, password}){
    this.props.signinUser({username, password})
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div style={styles.login}>
        {(window.localStorage.getItem("user") !== null) && <Redirect to={{pathname:'/home'}}/>}
        <Card style={styles.titleStyle}>
          <FontIcon
            className="fa fa-snowflake-o"
            style={styles.fontSizeLogo}
          />
          <CardText>
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field name="username" component={fieldUsername} label="Username"/>
              <Field name="password" component={fieldPassword} label="Password"/>
              <CardActions style={styles.btnStyle}>
              <RaisedButton type="submit" label="Signin" />
              </CardActions>
            </form>
          </CardText>
        </Card>
      </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    userAuthCheck: state
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    signinUser: user => dispatch(signinUser(user))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(reduxForm({
  form: 'signin',
  fields: ['username', 'password']
})(LoginApp))
