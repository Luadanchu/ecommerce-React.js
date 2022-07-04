import React from 'react'
import './style.css'
import Item from '../Item'

const ItemList = ({ products }) => {

  //console.log(products)

  return (
    <div className='itemList'>
      {products.map(product => <Item key={product.id} product={product} /> )}
    </div>
  )
}

export default ItemList

//itemList solo mapea los productos