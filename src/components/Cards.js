import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, price,} = item;
  return (
    <div className="cards">
        <div className="details">
            <p>{title}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards