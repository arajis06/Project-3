import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            // <div style={{ height: "75vh" }}>
            <div className="landing-container">
                <div className="sphere navy" style={{marginLeft:"auto", marginRight:"auto"}}>bootCamp</div>
                    <div className="row">
                        <br/>
                        <div className="col-sm-12">
                            <div className="btn-box text-center" >
                                <Link  to="/register"
                                    style={{
                                        fontSize: "18px",
                                        color: "white",
                                        fontWeight: "bold",
                                        // width: "25%",
                                        // borderRadius: "3px",
                                    }}
                                    className="btn btn-lg btn-purple">
                                        Register
                                </Link>
                                <br/>
                                
                                <Link to="/login"
                                    style={{
                                        fontSize: "18px",
                                        color: "white",
                                        fontWeight: "bold",
                                    //     width: "25%",
                                    //     borderRadius: "3px",
                                    //     marginTop: "10px"
                                        
                                    }}
                                    className="btn btn-lg btn-light-green">
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
