import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-btn">
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/">BootCamp[HUB] </a></div>
            <div className="spacer" />
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Resources</a></li>

                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;