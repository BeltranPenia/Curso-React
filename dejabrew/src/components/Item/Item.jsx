import React from 'react'
import './Item.css'
import ItemCounter from '../ItemCounter/ItemCounter'

function Item({id, name, description, price, stock, pictureUrl}) {

  return (
    <article className='item'>
      <img src={pictureUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <p>STOCK: {stock}</p>
      <ItemCounter stock={stock} initial={0} />
    </article>
  )
}

export default Item