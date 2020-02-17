import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openLoginDialog, closeLoginDialog } from '../../actions';
import LoginDialog from '../LoginDialog';
import { getLocalStorage, clearLocalStorage, isUserLoggedIn } from '../../utils'

const Header = props => {

  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    async function getUserDetails() {
      const data = getLocalStorage('loggedInUser');
      setUserDetails(data);
    }
    getUserDetails();
  }, []);

  function logout() {
    clearLocalStorage('loggedInUser');
    window.location.href = '/';
  };

  function playFantasy() {
    if (isUserLoggedIn('loggedInUser')) {
      window.location.href = '/create-team';
    } else {
      props.openLoginDialog()
    }
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/"><span>10Pearls Cricket Fantasy</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
			</button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item cta">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => playFantasy()}
                className="nav-link">
                Play
              </a>
            </li>
            {userDetails && (
              <li className="nav-item cta">
                Welcome: {userDetails.first_name}
                <a onClick={() => logout()}>Logout</a>
              </li>
            )
            }
          </ul>
        </div>
      </div>
      <LoginDialog
        open={props.loginDialogState.open}
        onClose={() => props.closeLoginDialog()}
      />
    </nav>
  );
};

const mapStateToProps = state => ({ loginDialogState: state.loginReducer });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ openLoginDialog, closeLoginDialog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
