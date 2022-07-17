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
  const [productsFilter, setproductsFilter ] = useState([]);
  const params = useParams()
  //console.log(param)
  
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const q = query(collection(db, "products"));
          const querySnapshot = await getDocs(q);
          const productos = []
          querySnapshot.forEach((doc) => {
            //doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            productos.push({id: doc.id, ...doc.data()})
          });
          //console.log(productos)

          // const resp = await fetch('https://fakestoreapi.com/products');
          // const data = await resp.json();
          //console.log(data)
          setProducts(productos);
        } catch (error) {
          console.log(error);
        }
      })();
    }, 500);

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
        <p className='texto'>{greeting}</p>
        {/* <Loader loader={false} /> */}
        {products ? <ItemList products={params?.idCategory ? productsFilter : products} /> : <Loader loader={true} /> }
    </div>
  )
}

export default ItemListContainer


//ACÁ VA TODA LA LÓGICA => Puedo hacer la petición en un helper

/* Este es el contenedor de la tienda, itemList: contenedor de cards, y el Item es la card en sí*/

//item list container es 1er pantalla, donde veo todo
//itemList solo hace el map!!
//item solo la vista de la card!!
//item detalle contenedor, 2da pantalla, va a estar el contador con la descripción!!
//3ra vista el carrito