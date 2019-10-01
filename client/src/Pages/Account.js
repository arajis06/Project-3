import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import Profile from '../Components/Profile/Profile';
// import jwt_decode from 'jwt-decode';

class Account extends Component {
  // set initial state
  state = {
    sideDrawerOpen: false,

  };

//   componentDidMount() {
//     const token = localStorage.usertoken
//     const decoded = jwt_decode(token)
//     this.setState({
//         first_name: decoded.first_name,
//         last_name: decoded.last_name,
//         email: decoded.email
//     })
// }


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
          <Router>
            <div className="container" style={{marginTop: '10em'}}>
                <div className="row">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    {/* <Route exact path="/account" component={Profile} /> */}

                    <Profile/>
                </div>
            </div>
          </Router>

        )
    }
}

export default Account;