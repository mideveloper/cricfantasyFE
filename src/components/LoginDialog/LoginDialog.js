import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import './LoginDialog.scss';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login } from '../../actions';

class LoginDialog extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleClose = () => {
    this.setState({
      username: '',
      password: '',
      isValid: false,
    });
    this.props.onClose();
  };

  handleChange = ({ value, name }) => {
    this.setState({ [name]: value }, () => {
      const { username, password } = this.state;
      this.setState({ isValid: (!!username && !!password) });
    });
  };

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  render() {
    const { open, loginResponse } = this.props;
    const { username, password, isValid } = this.state;
    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <span className="icon-btn-container">
          <IconButton onClick={() => this.handleClose()}>
            <Icon style={{ fontSize: '28px', color: '#ffb400' }}>cancel</Icon>
          </IconButton>
        </span>
        <div className="login-dialog">
          <div className="heading">Enter your COGS credentials to Play!</div>
          <form className="box">
            <input
              name="username"
              value={username}
              placeholder="Username"
              onChange={e => this.handleChange(e.target)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={e => this.handleChange(e.target)}
            />
            <div className="btn-container">
              <p className="error-msg">{loginResponse.errMessage}</p>
              <button disabled={!isValid} type="button" onClick={e => this.login(e)}>
                Login
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({ loginResponse: state.loginReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
