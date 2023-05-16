import React from 'react';
import Card from './Card';
import festivals from './festivals.json';
import './Card.css'

function Cardlist() {

    return (
    <div className={"Cardlist"}>
            {festivals.map((entry, index) => (
                <Card key={index} name={entry.name} logo={entry.logo} />
            ))}
        </div>
    );
}

export default Cardlist;
