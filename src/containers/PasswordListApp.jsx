import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { addSite, dataSite, editSite, removeSite } from '../actions'

const styles = {
  margin: 12,
  hiddenId: {
    display: 'none'
  }
};

const fieldUrl = ({input}) => (
  <TextField
    floatingLabelText="URL"
    type="text"
    value={"ada"}
    {...input}
    fullWidth={true}
  />
)
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
    type="text"
    {...input}
    fullWidth={true}
  />
)

class PasswordListApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      editDialog: false,
      id: '',
      url: '',
      username: '',
      password: ''
    };
  }

  handleOpen(string, data) {
    if (string === 'new site') {
      this.setState({open: true});
    }else{
      this.setState({editDialog: true, id: data._id, url: data.url, username: data.username, password: data.password});
    }
  };

  handleClose(string) {
    if (string === 'new site') {
      this.setState({open: false});
    }else{
      this.setState({editDialog: false});
    }
  };

  handleFormSubmit({url, username, password}){
    this.props.addSite({url, username, password})
    this.handleClose('new site')
  }

  handleFormSubmitEdit(){
    let data = {
      id: this.refs.id.getValue(),
      url: this.refs.url.getValue(),
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    }
    this.props.editSite(data)
    this.handleClose('edit site')
  }

  onChangeUrl(e) {
    this.setState({ url: e.target.value });
  }
  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  componentDidMount(){
    this.props.fetchDataSite()
  }

  removeSites(id){
    let conf = confirm("Are you sure?")
    if (conf) {
      this.props.removeSite(id)
    }
  }

  render() {
    const { handleSubmit } = this.props
    const { id, url, username, password } = this.state
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this, 'new site')}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))}
      />,
    ];
    const actionsEditSite = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this, 'edit site')}
      />,
      <FlatButton
        label="Update"
        primary={true}
        onTouchTap={handleSubmit(this.handleFormSubmitEdit.bind(this, {url, username, password}))}
      />,
    ];
    return (
      <div>
        <RaisedButton label="Add Site" secondary={true} style={styles} onTouchTap={this.handleOpen.bind(this, 'new site')}/>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The ID">URL</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Username</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Password</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            displaySelectAll={false}
            displayRowCheckbox={false}
          >
            {this.props.dataSite.sites.map( (sites) => (
              <TableRow key={sites._id}>
                <TableRowColumn>{sites.url}</TableRowColumn>
                <TableRowColumn>{sites.username}</TableRowColumn>
                <TableRowColumn>{sites.password}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton
                    onClick={this.handleOpen.bind(this, 'edit site', sites)}
                    secondary={true}
                    icon={<FontIcon className="fa fa-pencil" />}
                    style={styles}
                  />
                  <FlatButton
                    onClick={this.removeSites.bind(this, sites._id)}
                    secondary={true}
                    icon={<FontIcon className="fa fa-trash-o" />}
                    style={styles}
                  />
              </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Dialog
            title="Add Site"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            <Field name="url" component={fieldUrl} label="URL"/>
            <Field name="username" component={fieldUsername} label="Username"/>
            <Field name="password" component={fieldPassword} label="Password"/>
          </Dialog>
        </form>
        <form onSubmit={handleSubmit(this.handleFormSubmitEdit.bind(this))}>
          <Dialog
            title="Edit Site"
            actions={actionsEditSite}
            modal={true}
            open={this.state.editDialog}
          >
            <TextField
              style={styles.hiddenId}
              name="id"
              ref="id"
              value={id}
              fullWidth={true}
            />
            <TextField
              ref="url"
              floatingLabelText="URL"
              name="url"
              onChange={this.onChangeUrl.bind(this)}
              type="text"
              value={url}
              fullWidth={true}
            />
            <TextField
              ref="username"
              floatingLabelText="Username"
              name="username"
              onChange={this.onChangeUsername.bind(this)}
              type="text"
              value={username}
              fullWidth={true}
            />
            <TextField
              ref="password"
              floatingLabelText="Password"
              name="password"
              onChange={this.onChangePassword.bind(this)}
              type="password"
              value={password}
              fullWidth={true}
            />
          </Dialog>
        </form>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    dataSite: state
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchDataSite : ()      => dispatch(dataSite()),
    addSite       : (site)  => dispatch(addSite(site)),
    editSite      : (site)  => dispatch(editSite(site)),
    removeSite    : (id)    => dispatch(removeSite(id))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(reduxForm({
  form: 'addSiteForm',
  fields: ['url', 'username', 'password', 'url_edit', 'username_edit', 'password_edit']
})(PasswordListApp))
