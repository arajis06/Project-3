import React, { Component } from 'react';
import "./Profile.css";
// import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    // componentDidMount() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email
        // })
    // }

    render() {
        return (

        // <div className="card ">
        //         {/* <!-- Card image --> */}
        //         <div className="view view-cascade overlay">
        //             <img className="card-img-top" alt="profile-img" src="https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg" />
        //         </div>
        //             {/* <!-- Card content --> */}
        //             <div className="card-body card-body-cascade text-center pb-0">

        //                 {/* <!-- Title --> */}
        //                 <h4 className="card-title"><strong>Profile</strong></h4>
        //                 {/* <!-- Text --> */}
        //                     <p className="card-text">
        //                         {/* Account Info:  */}
        //                         {this.state.first_name}
        //                         {this.state.last_name}
        //                         {this.state.email}
        //                         {/* {this.componentDidMount} */}
        //                     </p>

        //                 {/* <!-- Card footer --> */}
        //                 <div className="card-footer text-muted text-center mt-4">
        //                     Connect
        //                 </div>

        //             </div>

        //         </div>

        <div class="card profile-card mt-4 ">
            <div class="card-body">
                <h3 class="card-title text-center">Account Info</h3>
             <div className="row">
                <div className="img-col col-md-5">
                    <img className="img-responsive" alt="profile-img" src="https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg" /> 
                </div> 
                <div className="col-md-7">
                <div class="table-responsive">
                 <table className="table">
                        <thread>
                            <tr class="table-header">
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </thread>
                        <tbody>
                            <tr></tr>

                        </tbody>
                    </table> 
                    </div>
                </div>
            </div> 
            </div>
            </div>
        )
    }
}
export default Profile;