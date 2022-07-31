import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import './style.css'

const Checkout = () => {

  return (
    <div className='checkOutCont'>
      <Typography 
        variant="subtitle1"  
        component="div" 
        sx={{ 
          fontSize:'2rem', 
          color:'#1a237e',
          marginBottom:'1rem'
        }}>
        Thank You!! 
      </Typography>
      <Button 
        variant='outlined' 
        color="success"
        sx={{ width:'25%', 
          fontSize:'1rem', 
          marginTop:'1rem', 
          '&:hover': { 
            color:'success' 
          } 
        }} >
        <Link to='/' >
        Return
        </Link>
      </Button>
        
    </div>
  );
}

export default Checkout