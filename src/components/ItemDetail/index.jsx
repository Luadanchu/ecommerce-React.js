import React, { useState, useContext }  from 'react'
import ItemCount from '../ItemCount'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { ShopCart } from '../../context/CartContext'
import { Typography, Button } from '@mui/material'

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
        <Typography 
          variant="h3" 
          component="div" 
          sx={{ 
            fontSize:'2rem', 
            color:'#1a237e', 
            marginBottom:'1.8rem' 
          }}>
          {product.title}
        </Typography>
        <Typography 
          variant="p" 
          color="text.secondary" 
          component="div" 
          sx={{ 
            fontSize:'1.2rem', 
            textAlign:'justify', 
            marginBottom:'1.5rem' 
            }}>
          {product.description}
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          component="div" 
          sx={{ 
            fontSize:'1.8rem', 
            color:'#303f9f' 
            }}>
          $ {product.price}
        </Typography>
        
        {(newCount <= 0) ? 
          <ItemCount handleAdd={ handleAdd } initial={1} stock={ product.stock } />
          :
          <Button 
            variant='outlined' 
            sx={{ 
              width:'100%', 
              fontSize:'1rem', 
              marginTop:'5rem', 
              '&:hover': { 
                color:'#1a237e' 
              } 
            }} 
            onClick={ handleCheckout } > 
            Confirm 
          </Button>
        }
      </div>
    </div>
  )
}
 
export default ItemDetail