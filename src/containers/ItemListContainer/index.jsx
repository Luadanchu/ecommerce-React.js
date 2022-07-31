import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import Loader from '../../components/Loader'
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './style.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [productsFilter, setproductsFilter] = useState([]);
  const params = useParams()

  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          productos.push({id: doc.id, ...doc.data()})
        });
        if(params?.idCategory){
          const productsFilter = productos.filter(producto => producto.category === params.idCategory)
          setproductsFilter(productsFilter); 
        } else{
          setProducts(productos);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    
  }, [params.idCategory])

  return (
    <div className='itemListContainer'>
        {products.length !== 0 ? <ItemList products={params?.idCategory ? productsFilter : products} /> : <Loader loader={true} /> }
    </div>
  )
}

export default ItemListContainer