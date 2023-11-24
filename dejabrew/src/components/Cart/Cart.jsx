import React from 'react'
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { cartContext } from '../Contexts/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {

    const {cartList,actualQuantity,removeList, total} = useContext(cartContext);

  return (
    <div className='cart-container'>
        {(actualQuantity()!==0 ? cartList.map((element) => (
            <CartItem {...element} key={element.item.id} />
        )
        ) : <h1>No hay productos en el carrito</h1>)}
        {(actualQuantity()!==0 ? <h2 className='total'>Total: ${total()}</h2> : null)}
        {(actualQuantity()!==0 ? <button className='erase' onClick={()=>removeList()}>BORRAR EL CARRITO</button>
         : null)}
         {(actualQuantity()!==0 ? <Link className="check" to='/checkout'><button className='buy'>CONFIRMAR COMPRA</button></Link>: null)}
    </div>

  )
}

export default Cart