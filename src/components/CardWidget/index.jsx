import React, { useContext } from 'react'
import './style.css';
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ShopCart } from '../../context/CartContext';

const CardWidget = () => {

  const Nav = useNavigate()
  const {cartItems} = useContext(ShopCart)

  const handleCart = () =>{
    Nav('/Cart')
  }

  return (
    <div className='widgetComplete'>
      <FaShoppingCart size={30} className='cartIcon'  onClick={ handleCart } />
      {(cartItems.length  > 0) ? <span className='spanCartItems'>{cartItems.length}</span> : ' '}
    </div>
  )
}

export default CardWidget 