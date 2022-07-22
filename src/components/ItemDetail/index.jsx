import React, { useState, useContext }  from 'react'
import ItemCount from '../ItemCount'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { ShopCart } from '../../context/CartContext'

const ItemDetail = ({ product }) => {

    //console.log(product)
    const nav = useNavigate()

    const [newCount, setNewCount] = useState(0)

    const {addItemCart} = useContext(ShopCart)

    const handleAdd = (count) =>{
      setNewCount(count);
      console.log(`Se agregaron ${count} productos al carrito`) //Alert?
    }
    //console.log(newCount)

    const handleCheckout = () =>{
      addItemCart(product, newCount)
      nav('/Cart')
    }

  return (
    <div className='itemDetailCard'>
      <img className='imgItemDetailCard' src={product.image} alt= {product.title} />
      <div className='descrptionItemDetailCard'>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p className='txtPrecio'> $ {product.price}</p>
        {(newCount <= 0) ? 
          <ItemCount handleAdd={ handleAdd } initial={1} stock={ product.stock } />
          :
          <button className='buttonCheckout' onClick={ handleCheckout } > Confirm </button>
        }
      </div>
    </div>
  )
}

export default ItemDetail