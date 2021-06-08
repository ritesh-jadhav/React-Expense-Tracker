import React from 'react';
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    // adding classes to custom wrapper class so they className supports it
    return <div className={classes}>{props.children}</div>
}

export default Card;