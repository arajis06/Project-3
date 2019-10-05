import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import SignIn from "./Pages/SignIn";
import Resource from "./Pages/Resource";
import LandingHome from "./Pages/Landing";
import Video from "./Pages/Video";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

import Articles from "./Pages/Articles";

import PrivateRoute from "./Components/privateRoute/PrivateRoute";

import Account from "./Pages/Account";
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = (localStorage.jwtToken);

  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {

  render = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
          <Route exact path="/" component={LandingHome} />
          <Route exact path="/Signin" component={SignIn} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
          <Route exact path="/resource" component={Resource} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/post" component={Post} />

          <Route exact path="/blog/:id" component={Articles} />
         
          <Route exact path="/Account" component={Account} />

         {/* <Footer /> */}
      </div>
    </Router>
  </Provider>    
  );
}

export default App;
