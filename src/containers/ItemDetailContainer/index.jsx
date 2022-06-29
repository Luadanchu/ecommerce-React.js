import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import './style.css'

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {

    const getItem = async () =>{
      try {
        const resp = await fetch('https://fakestoreapi.com/products/1')
        const data = await resp.json();
        setProductDetail(data)
      } catch (error) {
        console.log(error)
      }
    }
    
    setTimeout(() => {
     getItem()
    }, 2000);

  }, [])
  

  return (
    <div className='itemDetailContainer'>
      <ItemDetail product={productDetail} />
    </div>
  )
}

export default ItemDetailContainer