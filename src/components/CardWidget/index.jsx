import React from 'react'
import './style.css';
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CardWidget = () => {

  const Nav = useNavigate()

  const handleCart = () =>{
    Nav('/Cart')
  }

  return (
    <FaShoppingCart size={23} className='cartIcon'  onClick={ handleCart } />
  )
}

export default CardWidget 