import './Item.css'
import { Link } from 'react-router-dom';

function Item({id, name,pictureUrl}) {

  return (
    <article className='item'>
      <Link to={`/item/${id}`} className='link'>
        <img src={pictureUrl} alt={name} />
        <h3>{name.toUpperCase()} </h3>
      </Link>
    </article>
  )
}

export default Item