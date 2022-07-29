import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import Loader from '../../components/Loader'
import { collection, query, getDocs } from 'firebase/firestore'
import './style.css'
import { db } from '../../firebase/config'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [productsFilter, setproductsFilter] = useState([]);
  const params = useParams()
  //console.log(param)

  

  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });
        //console.log(productos)
        setProducts(productos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  useEffect(() => {
    if(params?.idCategory){
      const productsFilter = products.filter(producto => producto.category === params.idCategory)
      setproductsFilter(productsFilter); 
    }  
  }, [params, products])
  
  //console.log(products)

  return (
    <div className='itemListContainer'>
        {products.length !== 0 ? <ItemList products={params?.idCategory ? productsFilter : products} /> : <Loader loader={true} /> }
    </div>
  )
}

export default ItemListContainer