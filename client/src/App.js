import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Resource from "./Pages/Resource";
import LandingHome from "./Pages/Landing";
import Video from "./Pages/Video";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";
import Account from "./Pages/Account";
import './App.css';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './Components/Chat/chat.css';


class App extends Component {

  render = () => (
    <Router>
      <div className="App">
          <Route exact path="/" component={LandingHome} />
          <Route exact path="/Signin" component={SignIn} />
          <Route exact path="/resource" component={Resource} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/account" component={Account} />
         {/* <Footer /> */}
          <Widget />
      </div>
    </Router>
  );
}

export default App;
