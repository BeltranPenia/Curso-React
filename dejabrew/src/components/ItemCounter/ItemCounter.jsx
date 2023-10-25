import './ItemCounter.css'
import { useState } from 'react';

const ItemCounter = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(initial);

    const add = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const remove = () => {
        if(count > initial && count>0){
            setCount(count - 1);
        }
    }

  return (
    <div className='counter'>
        <div className='controls'>
            <button className='button' onClick={remove}>-</button>
            <h4 className='number'>{count}</h4>
            <button className='button' onClick={add}>+</button>
        </div>
        <div>
            <button className='button' onClick={()=>onAdd(count)} disabled={!stock}>AGREGAR</button>
        </div>
    </div>
  )
}

export default ItemCounter