import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import './style.css'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});

  const param = useParams()
  //console.log(param)

  useEffect(() => {

    const getItem = async () =>{
      try {
        //1° db declarado en config.js | 2° la colección que estoy llamando | 3° id del documento
        const docRef = doc(db, "products", param.idProduct);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
          //console.log("Document data:", docSnap.data());
          //console.log(docSnap.id)
          const productDetail = {id: docSnap.id, ...docSnap.data()}
          setProductDetail(productDetail)
        } else {
          //doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error)
      }
    }
    getItem()
    // setTimeout(() => {
    //  getItem()
    // }, 2000);

  }, [param])
  

  return (
    <div className='itemDetailContainer'>
      <ItemDetail product={productDetail} />
    </div>
  )
}

export default ItemDetailContainer