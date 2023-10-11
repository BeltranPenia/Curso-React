import React from 'react'
import Logo from '../../images/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


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
          <CartWidget />
    </div>
  )
}

export default NavBar