import React from 'react';
import './Card.css';

function Card({ name, logo }) {
    return (
        <div className={"card-container"}>
            {/*  <h3>{name}</h3> */}
            <img src={require('./logos/' + logo)} alt={name} />
        </div>
    );
}

export default Card;
