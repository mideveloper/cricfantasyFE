import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={() => <div>Sorry, No Page Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
