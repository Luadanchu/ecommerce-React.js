import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ product }) => {

  return (
    <div>    
      <Link to={`/detail/${product.id}`}>
        <div className='card' >
          <img className='imgCard' src={product.image} alt={product.title} />
          <span className='titCard'>{product.title}</span> 
        </div>              
      </Link>
    </div>
  )
}

export default Item