import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import Loader from '../../components/Loader'
import './style.css'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [productsFilter, setproductsFilter ] = useState([]);
  const params = useParams()
  //console.log(param)
  
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const resp = await fetch('https://fakestoreapi.com/products');
          const data = await resp.json();
          //console.log(data)
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, 2000);

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
        {products ? <ItemList products={params?.idCategory ? productsFilter : products}/> : <Loader /> }
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