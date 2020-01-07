import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import Test from './containers/TestComponent';
// import "./App.css";
import './assets/scss/main.css';

import { Provider } from 'react-redux';
import store from './store';
import httpService from './utils/httpService';

const App = () => {
  httpService.init();
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route component={() => <div>Sorry, No Page Found</div>} />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
