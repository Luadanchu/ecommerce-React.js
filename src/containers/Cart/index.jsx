import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { ShopCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Cart = () => {
  
  const {cartItems, totalPrice, removeItem, clear} = useContext(ShopCart);
  // console.log(cart)
  const nav = useNavigate()

  const handleOrder = () =>{
    nav('/Order')
  }


  return (
    <div className='cartContainer'>
      {(cartItems.length)  < 1 ?
        (
          <div className='emptyCart'>
            <h3 className='txtEmpyCart'>Your cart it's empty</h3>
            <button className='buttonContineShopping'><Link to='/'>Continue Shopping</Link></button>
          </div>
        )  : 
          <> {cartItems.map (product => ( 
          <div className='itemCart' key={product.id}>
            <img className='imgCart'  src={product.image} alt= {product.title} />
            <p className='titleCart'>{product.title}</p> 
            <p className='txtCantCart'>{product.quantity} u</p>
            <p className='txtPrecioCart'> $ {product.price}/u</p>
            <p className='precioTotalCart'>Total $ {(product.price * product.quantity).toFixed(2)}</p>
            <AiFillDelete size={23} className="buttonDelete" onClick={() => removeItem(product)} />
          </div> 
        ))}
          <div className='confirmCart'> 
            <h5 className='txtConfirmCart'>Total Purchase $ { totalPrice }</h5>
            <div className='confirmCartButtons'>
              <button className='buttonContineShopping'><Link to='/'>Continue Shopping</Link></button>
              <button className='buttonConfirmCheckout' onClick={handleOrder}>Confirm</button>
              <button className='buttonCancel' onClick={clear}>Cancel</button>
            </div>
          </div> 
        </>
        } 
    </div>
  );
}

export default Cart;