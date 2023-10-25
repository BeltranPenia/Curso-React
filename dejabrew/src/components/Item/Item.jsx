import { useState } from 'react'
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'

function Item({id, name, description, price, stock, pictureUrl}) {

  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  }

  return (
    <article className='item'>
      <img src={pictureUrl} alt={name} />
      <div className='info'>
        <h3>{name} |</h3>
        <button className={showDetail ? 'flip' : 'reset'} onClick={handleClick}> V </button>
      </div>
      
      {showDetail && <ItemDetail description={description} price={price} stock={stock} />}
    </article>
  )
}

export default Item