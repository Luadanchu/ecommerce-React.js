import React from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import './style.css'

const ItemListContainer = ({ greeting }) => {

  const handleAdd= () =>{
    console.log("Se agregó al carrito") //Alert?
  }
  return (
    <div>
        <p className='texto'>{greeting}</p>
        <ItemList />
        <ItemCount handleAdd={ handleAdd } initial={ 1 } stock={ 3 } />
    </div>
  )
}

export default ItemListContainer