import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Navigation/Backdrop/Backdrop';

import "./Dashboard.css"

class Dashboard extends Component {
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
    
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };

render() {
    // let sideDrawer; //null
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const { user } = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              <div>
                <button
                    // style={{
                    //     width: "150px",
                    //     borderRadius: "3px",
                    //     letterSpacing: "1.5px",
                    //     marginTop: "1rem"
                    // }}
                    onClick={this.onLogoutClick}
                    className="btn btn-lg logout-btn"
                    >
                    Logout
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
               <button
                        // style={{
                        //     width: "150px",
                        //     borderRadius: "3px",
                        //     letterSpacing: "1.5px",
                        //     marginTop: "1rem"
                        // }}
                        onClick={this.onLogoutClick}
                        className="btn btn-lg logout-btn"
                        >
                        Logout
                </button>
            </div>
          </div>
            <div className="row">
              <div className="col-md-12">
                <h1>Welcome</h1> 
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card dashboard-card">
                  <div className="card-body">
                    <h4><b>HEY,</b> {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
                      <p className="flow-text grey-text text-darken-1">You are logged into {" "}
                        <span style={{ 
                          fontFamily: "monospace",
                          fontSize: "30px", 
                          color: "purple"
                          
                          }}>bootCampHUB</span> 
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
      </div>

    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);