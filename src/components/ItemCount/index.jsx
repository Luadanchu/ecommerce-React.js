import React from 'react'
import './style.css'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

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
          <AiOutlinePlus size={26} onClick={onAdd} className='buttonAdd' />
          <p className='txtCant' >{count}</p>
          <AiOutlineMinus size={26} onClick={onRemove} className='buttonRem' />
        </div>
        
        <button onClick={() => handleAdd(count)} className='buttonAddToCart' >Add to cart</button>
        <button onClick={resetCount} className='buttonCleanCart' >Reset</button>
    </div>
  )
}

export default ItemCount