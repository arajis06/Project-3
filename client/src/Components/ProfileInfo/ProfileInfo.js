import React, { Component }from 'react';

// import Toolbar from "../Components/Navigation//Toolbar/Toolbar";
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
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
            <div className="row">
                <div className="col-sm-12">
                    <div className="table col-md-mx-auto">
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
                    </div> 
                </div>
            </div>
        )
    }
}
export default ProfileInfo;