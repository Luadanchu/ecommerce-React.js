
import React from 'react'
import './style.css'
import { useState } from 'react'

const ItemCount = ( {handleAdd, stock, initial} ) => {

    const [count, setCount] = useState(initial)

    const onAdd = () =>{

      if (count <= stock - 1){
      setCount(count + 1)
      }
    }

    const onRemove = () =>{
      if (count !== 0){
        setCount(count - 1)
      }
    }

    const resetCount = () => {
      setCount(initial)
      console.log("Se eliminó del carrito")
    }

  return (
    <div className='buttonCard' >
      <p className='txtCant' >{count}</p>
        <div className='buttons' >
          <button onClick={onAdd} className='buttonAddRem' >+</button>
          <button onClick={onRemove} className='buttonAddRem' >-</button>
        </div>
        <button onClick={handleAdd} className='buttonAddToCart' >Add to cart</button>
        <button onClick={resetCount} className='buttonCleanCart' >Clean cart</button>
    </div>
  )
}

export default ItemCount