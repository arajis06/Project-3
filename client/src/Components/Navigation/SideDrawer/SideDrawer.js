import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}> 
            <ul>
                <li>
                    <a href="/dashboard">Home</a>
                </li>
                <li>
                    <a href="/account">Account</a>
                </li>
                <li>
                    <a href="/resource">Resources</a>
                </li>
            </ul>
        </nav>
    );

};


export default SideDrawer;