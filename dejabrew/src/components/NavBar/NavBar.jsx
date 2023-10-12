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
              <li><a href='#'>CAFÉS DEL MUNDO</a></li>
              <li><a href='#'>CAPSULAS</a></li>
              <li><a href='#'>ACCESORIOS</a></li>
              <li><a href='#'>MAQUINARIA</a></li>
          </ul>
          <CartWidget />
    </div>
  )
}

export default NavBar