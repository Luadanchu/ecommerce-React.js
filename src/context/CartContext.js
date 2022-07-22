import React, { createContext, useState, useEffect } from 'react'

export const ShopCart = createContext();

const CartProvider = ({ children }) => {

  const [buy, setBuy] = useState('Valor del context')
  const [cartItems, setCartItems] = useState([]) //Guardar el localStorage
  const [Quantity, setQuantity] = useState(0) 
  const [totalPrice, setTotalPrice] = useState(0) 

  const addItemCart = (product, quantity) =>{
    //console.log(product, quantity)

    const existentProduct = isInCart(product.id)
    //console.log(existentProduct)

    if (existentProduct){
      existentProduct.quantity += quantity
      setCartItems([...cartItems])
    }else {
      setCartItems([...cartItems, {...product, quantity: quantity}])
    }
  }

  const isInCart = (idProduct) => {
    return cartItems.find(el => el.id === idProduct)
  }

  const removeItem = (product) => {
    const removeProduct = cartItems.filter(item => item.id !== product.id)

    if(removeProduct){
      setCartItems(removeProduct)
    }
  }
  
  const clear = () => {
    if(cartItems.length >= 1){ 
      setCartItems([])
    }
  }

  useEffect(() => {
    setQuantity(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
    const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)
    setTotalPrice(total.toFixed(2))

  }, [cartItems])

  return (
    <ShopCart.Provider value={{ buy, setBuy, addItemCart, cartItems, totalPrice, removeItem, Quantity, clear }}>
      {children}
    </ShopCart.Provider>
  )
}

export default CartProvider