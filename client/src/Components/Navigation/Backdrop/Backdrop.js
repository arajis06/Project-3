import React from 'react';
import './Backdrop.css';

// Backdrop for sidedrawer
const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Backdrop;