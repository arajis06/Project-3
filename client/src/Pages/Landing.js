import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Toolbar from "../Components/Navigation//Toolbar/Toolbar";
import Landing from "../Components/Landing/Landing";
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
// import Dashboard from "./Components/Dashboard/Dashboard";
import '../../src/App.css';


class Home extends Component {
  // Methods for components in the Navigation Directory=========================
  // set initial state
  // state = {
  //   sideDrawerOpen: false
  // };
  //Previous state of the sidedrawer to control when to open
  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen };
  //   });
  // };
  //Controls when the backdrop displays
  // backdropClickHandler = () => {
  //   this.setState({ sideDrawerOpen: false })
  // };
  render() {
    // let sideDrawer; //null
    let backdrop;
    //backdrop will display when hamgurger is clicked to open sidedrawer
    // if (this.state.sideDrawerOpen) {
    //   // sideDrawer = <SideDrawer />;
    //   backdrop = <Backdrop click={this.backdropClickHandler} />;
    // }
    //========================================================================
    return (
        <Router>
          <div style={{ height: '100%' }}>
            {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {/* <Landing /> */}
            {backdrop}
             */}
            <main className="container-fluid">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            </main>

          </div>
        </Router>
    );
    }
}
export default Home;