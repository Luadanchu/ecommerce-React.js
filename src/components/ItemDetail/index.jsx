import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({ product }) => {

    //console.log(product)

    const handleAdd = (count) =>{
      console.log(`Se agregaron ${count} productos al carrito`) //Alert?
    }

  return (
    <div className='itemDetailCard'>
      <img className='imgItemDetailCard' src={product.image} alt= '' />
      <div className='descrptionItemDetailCard'>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p className='txtPrecio'> $ {product.price}</p>
      <ItemCount handleAdd={ handleAdd } initial={1} stock={ product?.rating?.count } /> 
      </div>
    </div>
  )
}

export default ItemDetail