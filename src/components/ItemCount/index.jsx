
import React from 'react'
import './style.css'
import { useState } from 'react'

const ItemCount = ( {handleAdd, stock, initial} ) => {

    const [count, setCount] = useState(initial)

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
      <p className='txtCant' >{count}</p>
        <div className='buttons' >
          <button onClick={onAdd} className='buttonAddRem' >+</button>
          <button onClick={onRemove} className='buttonAddRem' >-</button>
        </div>
        <button onClick={() => handleAdd(count)} className='buttonAddToCart' >Add to cart</button>
        <button onClick={resetCount} className='buttonCleanCart' >Clean cart</button>
    </div>
  )
}

export default ItemCount