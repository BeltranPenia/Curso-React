import React from 'react'
import Logo from '../../images/logo.png'
import './NavBar.css'
import Cart from '../../images/cart-shopping-solid.svg'

function NavBar() {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <img src={Logo} alt='logo' />
          </div>
          <ul>
              <li href='#' >CAFÉS DEL MUNDO</li>
              <li href='#' >CAPSULAS</li>
              <li href='#' >ACCESORIOS</li>
              <li href='#' >MAQUINARIA</li>
          </ul>
          <div className='cart'>
            <img  src={Cart} height='40px' />
            <div className='cart-number'>0</div>

          </div>
    </div>
  )
}

export default NavBar