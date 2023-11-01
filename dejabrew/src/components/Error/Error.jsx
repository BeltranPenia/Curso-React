import React from 'react'
import image from '../../images/error.png'
import './Error.css'

function Error() {
  return (
    <div className='error'>
        <img src={image} alt='404' />
        <h1>404 Error</h1>
    </div>
  )
}

export default Error