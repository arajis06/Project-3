import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import RegisterForm from "../Components/Auth/Register"
import LoginForm from "../Components/Auth/Login";
// import Dashboard from "./Components/Dashboard/Dashboard";
import '../../src/App.css';


class LandingHome extends Component {

    //========================================================================
    render() {
    return (
        <Router>
          <div style={{ height: '100%' }}>
            <main style={{ marginTop: '64px' }}  className="container main-container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            </main>

          </div>
        </Router>
    );
    }
}
export default LandingHome;