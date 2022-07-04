import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import './style.css'

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({ Loader:true });

  const param = useParams()
  //console.log(params)

  useEffect(() => {

    const getItem = async () =>{
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${param.idProduct}`)
        const data = await resp.json();
        setProductDetail(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    
    setTimeout(() => {
     getItem()
     
    }, 2000);

  }, [param])
  

  return (
    <div className='itemDetailContainer'>
      <ItemDetail product={productDetail} />
    </div>
  )
}

export default ItemDetailContainer