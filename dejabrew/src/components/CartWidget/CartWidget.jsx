import React from 'react'
import Cart from '../../images/cart-shopping-solid.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../Contexts/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {

  const { actualQuantity } = useContext(cartContext);

  return (
    <div className='cart'>
        <Link to='/cart'><img  src={Cart} height='40px' alt='cart'/></Link>
        <div className='cart-number'>{actualQuantity()}</div>
    </div>
  )
}

export default CartWidget