import React from 'react'
import './style.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <p className='texto'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer