import React from 'react'
import Cart from '../../images/cart-shopping-solid.svg'
import './CartWidget.css'

function CartWidget() {
  return (
    <div className='cart'>
        <img  src={Cart} height='40px' />
        <div className='cart-number'>0</div>
    </div>
  )
}

export default CartWidget