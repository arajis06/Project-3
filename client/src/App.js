import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store"

import Toolbar from "./Components/Navigation//Toolbar/Toolbar";
import Landing from "./Components/Landing/Landing";
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from './Components/Navigation/Backdrop/Backdrop';
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
// import Login from './Components/Login/Login';
import './App.css';

class App extends Component {
  // Methods for components in the Navigation Directory=========================
  // set initial state
  state = {
    sideDrawerOpen: false
  };
  //Previous state of the sidedrawer to control when to open
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  //Controls when the backdrop displays
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };
  render() {
    // let sideDrawer; //null
    let backdrop;
    //backdrop will display when hamgurger is clicked to open sidedrawer
    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    //========================================================================
    return (
      // <Provider store={store}>
        <Router>
          <div style={{ height: '100%' }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {/* <Landing /> */}
            {backdrop}
            
            <main style={{ marginTop: '64px' }}  className="container main-container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />        
            </main>

          </div>
        </Router>
      // </Provider>
    );
  }
}
export default App;
