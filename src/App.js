import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './containers/About'
import Home from './containers/Home';
import Login from './containers/Login';
import CreateTeam from './containers/CreateTeam';

// import "./App.css";
import './assets/scss/main.css';

import { Provider } from 'react-redux';
import store from './store';
import httpService from './utils/httpService';

function PrivateRoute({ children }) {
  const isUserLoggedIn = window.localStorage.loggedInUser;
  return (
    <Route
      render={({ location }) =>
        isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  httpService.init();
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/create-team">
            <PrivateRoute>
              <CreateTeam/>
            </PrivateRoute>
          </Route>
          <Route component={() => <div>Sorry, No Page Found</div>} />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
