import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {getProducts} from '../../asyncMock'

function ItemListContainer() {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  },[]);

  return (
    <div className='main'>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer

//<ItemCounter stock={5} initial={0} onAdd={(count)=>console.log("cantidad agregada ",count)} />