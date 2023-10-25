import React from 'react'
import Logo from '../../images/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>
          </div>
          <ul>
              <li><Link to='/cafe'>CAFÉS DEL MUNDO</Link></li>
              <li><Link to='/capsulas'>CAPSULAS</Link></li>
              <li><Link to='/accesorios'>ACCESORIOS</Link></li>
              <li><Link to='/maquinaria'>MAQUINARIA</Link></li>
          </ul>
          <CartWidget />
    </div>
  )
}

export default NavBar