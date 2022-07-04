import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ product }) => {

  return (
    <div className='card'>
      <img className='imgCard' src={product.image} alt='' />
      <h4>{product.title}</h4>
      <p> $ {product.price}</p>
      <button><Link to={`/detail/${product.id}`}>Ir al detalle</Link></button>
    </div>
  )
}

export default Item

//El ItemCount se va de este componente