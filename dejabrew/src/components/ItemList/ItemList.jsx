import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ products }) {
  return (
    <div className='group'>
        {products.map(product => 
        <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList