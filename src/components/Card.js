import React, {useState, useEffect} from 'react';

const Card = ({asset}) => {
    return (
        <div>
            <img src= {asset.image_url} height = '150px' width = '150px'></img>
            <p> {asset.name}</p>
            <p> {(Object.keys(asset.orders).length === 0)
                    ? "Not for sale"
                    : asset.orders.sell_orders[0].buy_quantity / 1000000000000000000 + "Ξ"
                }                     
            </p>
        </div>
    );
}

export default Card;