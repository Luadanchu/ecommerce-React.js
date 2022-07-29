import React from 'react'
import './style.css'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { Button, Typography } from '@mui/material'

const ItemCount = ( {handleAdd, stock, initial} ) => {

    const [count, setCount] = useState(initial) //COMPARAR COUNT CON STOCK E IR RESTANDO LOS ITEMS SUMADOS AL CARRITO.

    const onAdd = () =>{
      (count <= stock - 1) ? setCount(count + 1) : alert(`stock máximo: ${stock} unidades`)
    }

    const onRemove = () =>{
      (count !== 0) ? setCount(count - 1) : alert(`Compra mínima: ${initial} unidades`)
    } //Ver que pasa cuando me quedo sin stock (desabilitar la card?)

    const resetCount = () => {
      setCount(initial)
      console.log("Se eliminó del carrito")
    }

  return (
    <div className='buttonCard' >
        <div className='buttons' >
        <Button>
          <AiOutlinePlus size={26} color='#1a237e' onClick={onAdd} />
        </Button>

          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            component="div" 
            sx={{ 
              fontSize:'1.8rem', 
              color:'#303f9f' 
              }}>
            {count}
          </Typography>
          
          <Button>
            <AiOutlineMinus size={26} color='#1a237e' onClick={onRemove} />
          </Button>
        </div>
        
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