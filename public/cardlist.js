import React from 'react';
import card from './card';
import festivals from './festivals.json';

function cardList() {

    return (
        <div>
            {festivals.map((entry, index) => (
                <card key={index} name={entry.name} logo={entry.logo} />
            ))}
        </div>
    );
}

export default cardList;
