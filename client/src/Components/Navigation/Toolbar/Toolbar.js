import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-btn">
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo">
                <Link to="/">BootCamp[HUB] /</Link>
            </div>
            <div className="spacer" />
            <div className="toolbar-nav-items">
                <ul>
                    <li><Link to="/">Home/</Link></li>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/">Resources</Link></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;