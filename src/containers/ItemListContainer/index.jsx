import React from 'react'
import { useState, useEffect } from 'react'
// import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import './style.css'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  
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

  //console.log(products)

  const handleAdd = (count) =>{
    console.log(`Se agregaron ${count} productos al carrito`) //Alert?
  }

  return (
    <div className='itemListContainer'>
        <p className='texto'>{greeting}</p>
        {products ? <ItemList products={products}/> : null }
        {/* <ItemCount handleAdd={ handleAdd } initial={1} stock={3} /> */}

    </div>
  )
}

export default ItemListContainer


//ACÁ VA TODA LA LÓGICA => Puedo hacer la petición en un helper (carpeta + archivo promesa.js)

/* Este es el contenedor de la tienda, itemList: contenedor de cards, y el Item es la card en sí*/

//item list container es 1er pantalla, donde veo todo
//itemList solo hace el map!!
//item solo la vista de la card!!
//item detalle contenedor, 2da pantalla, va a estar el contador con la descripción!!
//3ra vista el carrito