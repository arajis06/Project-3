import React, { Component } from 'react';
import "./Profile.css";
// import jwt_decode from 'jwt-decode';

const Profile = props => (

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
export default Profile;