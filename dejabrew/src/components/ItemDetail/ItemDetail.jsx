import React from 'react'
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemDetail({description,price,stock}) {
  return (
    <div className={'detail-container'}>
        <p>{description}</p>
        <p>${price}</p>
        <p>STOCK: {stock}</p>
        <ItemCounter stock={stock} initial={0} />
    </div>
    
  )
}

export default ItemDetail