import React from 'react'
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemDetail({id, name, description, price, stock, pictureUrl}) {

  console.log('ItemDetail', id, name, description, price, stock, pictureUrl)
  return (
    <div className='detail-container'>
        <img src={pictureUrl} alt={name}/>
        <div className='info'>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <p>STOCK: {stock}</p>
          <ItemCounter stock={stock} initial={0} />
        </div>
    </div>
    
  )
}

export default ItemDetail