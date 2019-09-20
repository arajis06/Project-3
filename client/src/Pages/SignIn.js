import React, { Component } from 'react';
// import './App.css';
import Toolbar from "../Components/Toolbar/Toolbar";
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import Backdrop from '../Components/Backdrop/Backdrop';
import Login from '../Components/Login/Login';

class SignIn extends Component {
  // set initial state
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };
   render() {
    // let sideDrawer; //null
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p></p>
          <Login />
        </main>

      </div>
    ); 
  }
}
export default SignIn;
