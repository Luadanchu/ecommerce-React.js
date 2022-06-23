import React from 'react'
import Item from '../Item'
import { useEffect, useState } from 'react'

const ItemList = () => {

    const [products, setProductos] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const resp = await fetch('https://fakestoreapi.com/products');
          const data = await resp.json();
          // console.log(data);
          setProductos(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, 2000);

  }, [])

  console.log(products)

  return (
    <div>
      {products.map(product => (
        <Item key={product.id} product={product} initial={1} stock={3} /> 
      ))}
    </div>
  )
}

export default ItemList
