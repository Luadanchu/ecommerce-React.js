import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { Button, Typography } from '@mui/material'
import './style.css'

const ItemCount = ( {handleAdd, stock, initial} ) => {

  const [count, setCount] = useState(initial)

  const onAdd = () =>{
    if(count <= stock - 1) {setCount(count + 1) }
  }

  const onRemove = () =>{
    if(count !== 0) {setCount(count - 1)}
  }

  const resetCount = () => {
    setCount(initial)
  }

  return (
    <div className='buttonCard' >
      <div className='buttons' >
        {(count === stock) ?
          <Button disabled >
            <AiOutlinePlus size={26} color='#9fa8da' />
          </Button>
            :
           <Button >
            <AiOutlinePlus size={26} color='#1a237e' onClick={onAdd}  />
          </Button>
        }
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          component="div" 
          sx={{ 
            fontSize:'1.8rem', 
            color:'#303f9f' 
          }}>
        {(stock === 0) ? 0 : count}
        </Typography>
        {(count === 1) ?
          <Button disabled >
            <AiOutlineMinus size={26} color='#9fa8da' />
          </Button>
          :
          <Button>
            <AiOutlineMinus size={26} color='#1a237e' onClick={onRemove} />
          </Button>
        }
      </div>
        <Typography 
          variant="subtitle1"  
          component="div" 
          sx={{ 
            fontSize:'.9rem', 
            color:'#1a237e' 
          }}>
          {(stock > 0) ? `Avaible stock: ${stock} units` : 'Out of Stock'}
        </Typography>
        <Button 
          variant='outlined' 
          color="success"
          sx={{ width:'100%', 
            fontSize:'1rem', 
            marginTop:'1rem', 
            '&:hover': { 
              color:'success' 
            } 
          }}  
          onClick={() => handleAdd(count)} >
            Add to cart
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
          onClick={resetCount} >
            Reset
        </Button>
    </div>
  )
}

export default ItemCount