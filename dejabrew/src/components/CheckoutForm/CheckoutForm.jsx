import React from 'react'
import './CheckoutForm.css'
import { useState } from 'react'

function CheckoutForm( {createOrder}) {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const handleOrder = (e) => {
        e.preventDefault();
        createOrder({ nombre, telefono, email });
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleOrder}>
            <label>Nombre</label>
            <input type='text' value={nombre} onChange={(e)=>setNombre(e.target.value)} required/>
            <label>Teléfono</label>
            <input type='tel' value={telefono} onChange={(e)=>setTelefono(e.target.value)} required/>
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label>Confirmar Email</label>
            <input type='email' value={emailConfirm} onChange={(e)=>setEmailConfirm(e.target.value)} required/>
            <button className='submit' disabled={email!==emailConfirm} type='submit'>ENVIAR</button>
        </form>
    </div>
  )
}

export default CheckoutForm