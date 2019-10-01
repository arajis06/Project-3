import React, { Component } from 'react';

import jwt_decode from 'jwt-decode';


class ProfileInfo extends Component {
    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (

        <div className="card card-cascade wider">
                {/* <!-- Card image --> */}
                <div className="view view-cascade overlay">
                    <img className="card-img-top" alt="profile-img" src="https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg" />
                </div>
                    {/* <!-- Card content --> */}
                    <div className="card-body card-body-cascade text-center pb-0">

                        {/* <!-- Title --> */}
                        <h4 className="card-title"><strong>Profile</strong></h4>
                        {/* <!-- Text --> */}
                            <p className="card-text">
                                Name: 
                                    {this.state.first_name}{this.state.last_name}
                                Email:
                                    {this.state.email}
                            </p>

                        {/* <!-- Card footer --> */}
                        <div className="card-footer text-muted text-center mt-4">
                            Connect
                        </div>

                    </div>

                </div>

            /* // <div className="row">
            //     <div className="col-sm-12">
            //         <div className="table col-md-mx-auto">
            //             <tbody>
            //                 <tr>
            //                     <td>First Name</td>
            //                     <td>{this.state.first_name}</td>
            //                 </tr>
            //                 <tr>
            //                     <td>Last Name</td>
            //                     <td>{this.state.last_name}</td>
            //                 </tr>
            //                 <tr>
            //                     <td>Email Address</td>
            //                     <td>{this.state.email}</td>
            //                 </tr>
            //             </tbody>
            //         </div> 
            //     </div>
            // </div> */
        )
    }
}
export default ProfileInfo;