import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({ product, handleAdd }) => {

    //console.log(product)
    //console.log(product.rating.count) => lo lee, pero no lo toma como prop

  return (
    <div className='itemDetailCard'>
      <img className='imgItemDetailCard' src={product.image} alt= '' />
      <div className='descrptionItemDetailCard'>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p> $ {product.price}</p>
      <ItemCount handleAdd={ handleAdd } initial={1} stock={ 3 } /> 
      </div>
    </div>
  )
}

export default ItemDetail