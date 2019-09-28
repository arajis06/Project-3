import React, { Component }from 'react';

// import Toolbar from "../Components/Navigation//Toolbar/Toolbar";
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import jwt_decode from 'jwt-decode';


class Profile extends Component {
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
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2 className="profile-title text-center">Profile</h2>
                    </div>
                    <div className="card-body">
                    {this.state.first_name}
                    {this.state.last_name}
                    {this.state.email}
                        {/* <div className="table col-md-mx-auto">
                            <tbody>
                                <tr>
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
                            </tbody>
                        </div> */}

                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;