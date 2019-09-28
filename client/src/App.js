import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Resource from "./Pages/Resource";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

class App extends Component {

  render = () => (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/Signin" component={SignIn} />
          <Route exact path="/resource" component={Resource} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
      </div>
    </Router>
  );
}

export default App;
