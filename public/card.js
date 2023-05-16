import React from 'react';
import logo from './logos/'

function Card({ name, logo }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={logo} alt={name} />
        </div>
    );
}

export default Card;
