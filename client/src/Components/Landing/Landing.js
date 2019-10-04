import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            // <div style={{ height: "75vh" }}>
            <div className="landing-container">
                {/* <div className="sphere navy">bootCamp</div> */}
                <div className="sphere navy">bootCamp</div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-box text-center" style={{marginTop: "10%",}}>
                                <Link  to="/register"
                                    style={{
                                        fontSize: "18px",
                                        color: "white",
                                        fontWeight: "bold",
                                        // width: "180px",
                                        borderRadius: "3px",
                                    }}
                                    className="btn btn-md btn-secondary">
                                        Register
                                </Link>
                                
                                {/* <div className="col-sm-12"> */}
                                    <Link to="/login"
                                        style={{
                                            fontSize: "18px",
                                            color: "white",
                                            fontWeight: "bold",
                                            // width: "180px",
                                            borderRadius: "3px",
                                            
                                        }}
                                        className="btn btn-md btn-default">
                                        Login
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
