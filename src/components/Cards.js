import React from 'react';
import Card from './Card.js';

const Cards = ({filtered}) => {
   
    return (  
         filtered.map(asset => (
                    <Card key = {asset.token_id} asset = {asset}/> 
                ))
    );
}

export default Cards;