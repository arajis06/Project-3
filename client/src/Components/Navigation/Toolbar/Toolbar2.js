import React, { Component } from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import { Link, withRouter } from 'react-router-dom';
import './Toolbar.css';

class Toolbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render(){
        const loginRegLink = (

                    <div className="toolbar-nav-items">
                        <ul>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </div>
        )

        const userLinks = (
                    <div className="toolbar-nav-items">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/resource">Resources</a></li>
                            <li><a href="" onClick={this.logOut.bind(this)}>Logout</a></li>

                        </ul>
                    </div>
        )

        return(
            <header className="toolbar">
                <div className="toolbar-nav">
                    <div className="toolbar-toggle-btn">
                        <DrawerToggleBtn onclick={this.drawerClickHandler} />
                    </div>
                    <div className="toolbar-logo">
                        <Link to="/">BootCamp[HUB] </Link>
                    </div>

                    <div className="spacer" />

                    {localStorage.usertoken ? userLinks : loginRegLink}

                </div>
            </header>

        )
    }
}


export default withRouter(Toolbar);