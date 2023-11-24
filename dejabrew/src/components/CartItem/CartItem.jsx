import React from 'react'
import Can from '../../images/trash-can-solid.svg'
import { useContext } from 'react'
import { cartContext } from '../Contexts/CartContext'
import './CartItem.css'

function CartItem(element) {

    const {deleteItem} = useContext(cartContext);

  return (
    <div className='row' key={element.item.id}>
        <img className='cart-image' src={element.item.pictureUrl} alt={element.item.name}/>
        <h3>{element.item.name.toUpperCase()}</h3>
        <p>Cantidad: {element.cantidad}</p>
        <p>Precio: ${((element.item.price)*(element.cantidad)).toFixed(2)}</p>
        <img className='trash-can' onClick={()=>deleteItem(element.item.id)} src={Can} alt='trash-can'/>
    </div>
  )
}

export default CartItem