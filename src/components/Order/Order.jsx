import React, { useState, useContext } from 'react'
import confirmOrder from '../../auxFunctions/confirmOrder';
import { ShopCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Order = () => {

   const {cartItems, totalPrice, clear} = useContext(ShopCart);
   const nav = useNavigate()
   const [firstname, setFirstName] = useState('')
   const [lastname, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [emailCheck, setEmailCheck] = useState('')
   const [address, setAddress] = useState('')

   const newOrder = (date, firstName, lastName, email, cart, total) => {
      return {
         date: new Date().toLocaleString(),
         buyer: {
            firstName: firstName,
            lastName: lastName,
            email: email
         },
         items: cartItems,
         total: {totalPrice}
      }
   }

   const handleCheckout = () => {
      nav('/Checkout')
   }
   const finalOrder = async () => {
      const printOrder = newOrder(new Date().toLocaleString(), firstname, lastname, email, cartItems, {totalPrice})
      confirmOrder(cartItems, printOrder)
      clear() //ALERT O ALGO QUE LE DIGA AL CLIENTE QUE ESTÁ LA ORDEN!!
      handleCheckout()
   }

   return (
      <div className='formContainer'>
         <form>
            <input className='formControl' type="text" value={firstname} onChange={e=>setFirstName(e.target.value)} placeholder="First name"/>
            <input className='formControl' type="text" value={lastname} onChange={e=>setLastName(e.target.value)} placeholder="Last name"/>

            <input className='formControl' value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder="email@example.com"/>
            <input className='formControl' value={emailCheck} onChange={e=>setEmailCheck(e.target.value)} type='email' placeholder="email@example.com" />

            {email !== emailCheck ? <p>email doesn't match</p> : true }

            <input className='formControl' value={address} onChange={e=>setAddress(e.target.value)} type='text' placeholder="Address"/>
         </form>
            
         <button className='buttonForm' onClick={finalOrder} type="submit">Terminar Compra</button>

      </div>
   );
}

export default Order