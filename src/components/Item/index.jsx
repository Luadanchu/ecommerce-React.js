import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const Item = ({ product, handleAdd }) => {

  return (
    <div className='card'>
      <img className='imgCard' src={product.image} alt='' />
      <h4>{product.title}</h4>
      <p> $ {product.price}</p>
      <ItemCount handleAdd={ handleAdd } initial={ 1 } stock={ product.rating.count } /> 
      <button>Ir al detalle</button>
    </div>
  )
}

export default Item

//El ItemCount se va de este componente