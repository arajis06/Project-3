import React from 'react';
import "./Profile.css";
// import jwt_decode from 'jwt-decode';

const Profile = props => (

        <div className="card profile-card mt-4 ">
            <div className="card-body">
                <h3 className="card-title text-center">Account Info</h3>
             <div className="row">
                <div className="img-col col-md-5">
                    <img className="img-responsive" alt="profile-img" src="https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg" /> 
                </div> 
                <div className="col-md-7">
                <div className="table-responsive">
                 <table className="table">
                        <tbody>
                            <tr className="table-header">
                                <td>First Name</td>
                                <td>{props.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{props.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>{props.email}</td>
                            </tr>
                        </tbody>
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