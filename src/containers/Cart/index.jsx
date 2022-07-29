import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { IoIosArrowBack } from 'react-icons/io'
import { ShopCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import './style.css'

const Cart = () => {
  
  const {cartItems, totalPrice, removeItem, clear} = useContext(ShopCart);
  // console.log(cart)
  const nav = useNavigate()

  const handleOrder = () =>{
    nav('/Order')
  }


  return (
    <div className='cartContainer'>
      {(cartItems.length)  < 1 ?
        (
          <div className='emptyCart'>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'2rem', 
                color:'#1a237e', 
                marginBottom:'1.8rem', 
                marginTop:'1.2rem' 
              }}>
              Your cart it's empty
            </Typography>
            <Button 
                variant='outlined' 
                color="primary" 
                sx={{ 
                  width:'40%', 
                  fontSize:'1rem', 
                  marginTop:'1rem', 
                  '&:hover': { 
                    color:'#1a237e'
                    } 
                }}
                startIcon={<IoIosArrowBack size={20} />} >
                  <Link to='/'>
                    Continue Shopping
                  </Link>
              </Button>
          </div>
        )  : 
          <> {cartItems.map (product => ( 
          <div className='itemCart' key={product.id}>
            <img className='imgCart'  src={product.image} alt= {product.title} />
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'1rem', 
                color:'#212121',  
              }}>
              {product.title}
            </Typography>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'1rem', 
                color:'#212121',  
              }}>
              {product.quantity} u
            </Typography>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'1rem', 
                color:'#212121',  
              }}>
               $ {product.price}/u
            </Typography>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'1rem', 
                color:'#212121',  
              }}>
               Total $ {(product.price * product.quantity).toFixed(2)}
            </Typography>
            <Button>
              <AiFillDelete size={23} color='#212121' onClick={() => removeItem(product)} />
            </Button>
          </div> 
        ))}
          <div className='confirmCart'> 
          <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize:'1rem', 
                color:'#212121',  
              }}>
               Total Purchase $ { totalPrice }
            </Typography>
            <div className='confirmCartButtons'>
              <Button 
                variant='outlined' 
                color="secondary" 
                sx={{ 
                  width:'100%', 
                  fontSize:'1rem', 
                  marginTop:'1rem', 
                  '&:hover': { 
                    color:'#1a237e' 
                    } 
                }} >
                  <Link to='/'>
                    Continue Shopping
                  </Link>
              </Button>

              <Button 
                variant='outlined' 
                color="success"
                sx={{ 
                  width:'100%', 
                  fontSize:'1rem', 
                  marginTop:'.5rem', 
                  '&:hover': { 
                  color:'success' 
                } 
              }}  
                onClick={handleOrder}>
                Confirm
              </Button>

              <Button 
                color="error"
                sx={{ 
                  width:'100%', 
                  fontSize:'.8rem', 
                  marginTop:'.5rem', 
                  '&:hover': { 
                    color:'error' 
                  } 
             }}  
              onClick={clear}>
                Cancel
                </Button>

            </div>
          </div> 
        </>
        } 
    </div>
  );
}

export default Cart;