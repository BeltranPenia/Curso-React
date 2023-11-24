import React from 'react'
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemDetail(product) {

  //id, name, description, price, stock, pictureUrl

  return (
    <div className='detail-container'>
        <img src={product.pictureUrl} alt={product.name}/>
        <div className='info'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>STOCK: {product.stock}</p>
          <ItemCounter product={product} initial={1} />
        </div>
    </div>
    
  )
}

export default ItemDetail