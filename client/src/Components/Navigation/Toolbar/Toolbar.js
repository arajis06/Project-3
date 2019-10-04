import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = props => (

    <header className="toolbar">
        {/* Nav */}
        <div className="toolbar-nav">
            <div className="toolbar-toggle-btn">
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo">
                <Link to="/">BootCamp[HUB] </Link>
            </div>
            <div className="spacer" />
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><a href="/resource">Resources</a></li>
                </ul>
            </div>
        </div>
        {/* Nav */}
    </header>
);

export default Toolbar;