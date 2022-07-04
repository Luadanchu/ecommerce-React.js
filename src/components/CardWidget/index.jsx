import React from 'react'
import './style.css';
import { FaShoppingCart } from 'react-icons/fa'

const CardWidget = () => {
  return (
    <FaShoppingCart size={23} className='cartIcon' value={3}/>
  )
}

export default CardWidget 