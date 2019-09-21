import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            // <div style={{ height: "75vh" }}>
            <div className="landing-container">
            <div className="row">
                        <br />
                        <div className="col-sm-12">
                        <div className="btn-box text-center" style={{marginTop: "10%",}}>
                            <Link  to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                            </Link>
                        
                        {/* <div className="col-sm-12"> */}
                            <Link to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text">
                                Log In
                            </Link>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;
