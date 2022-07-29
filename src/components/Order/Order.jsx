import React, { useContext, useState, useEffect } from 'react'
import confirmOrder from '../../auxFunctions/confirmOrder';
import { ShopCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material'
import './style.css'

const Order = () => {

   const initialValues = {
      firstname: '',
      lastname: '',
      email: ''
   }
   const {cartItems, totalPrice, clear} = useContext(ShopCart);
   const nav = useNavigate();
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [submit, setSubmit] = useState(false)

   const newOrder = (date, firstname, lastname, email, cart, total) => {
      return {
         date: new Date().toLocaleString(),
         // buyer: values,
         buyer:{
            firstname: firstname,
            lastname: lastname,
            email: email,
         },
         items: cartItems,
         total: {totalPrice}
      }
   }
   
   const finalOrder = async () => {
      const printOrder = newOrder(new Date().toLocaleString(), formValues.firstname, formValues.lastname, formValues.email, cartItems, totalPrice)
      confirmOrder(cartItems, printOrder)
      clear()
      nav('/Checkout')
   }

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});
   };

   const errors = {}
   const validateForm = (values) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const rgx = /^[A-Z]+$/i;

      if(!values.firstname){
         errors.firstname = "First name is required"
      }else if(!rgx.test(values.firstname)){
         errors.email = "No valid format"
      }
      if(!values.lastname){
         errors.lastname = "Last name is required"
      }else if(!rgx.test(values.lastname)){
         errors.email = "No valid format"
      }
      if(!values.email){
         errors.email = "Email is required"
      } else if(!regex.test(values.email)){
         errors.email = "No valid email format"
      }
      return errors;
   }
   
   const handleSubmit = (e) =>{
      e.preventDefault();
      setFormErrors(validateForm(formValues))
      setSubmit(true)
   }

   useEffect(() => {
      //console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && submit){
         finalOrder()
      }
   })

   return (
      <div className='formContainer'>
         {/* <form onSubmit={handleSubmit}> */}
         <form>
            <TextField 
               // className='formControl'
               label="First name" 
               variant="filled"
               type="text" 
               name='firstname'
               value={formValues.firstname} 
               onChange={handleChange} 
               margin="dense"
            /><Typography 
            variant="p" 
            component="div" 
            sx={{ 
               fontSize:'1rem', 
               color:"#c62828" 
            }}>
            {formErrors.firstname}
         </Typography>
            <TextField 
               // className='formControl' 
               label="Last name" 
               variant="filled" 
               type="text"
               name='lastname'
               value={formValues.lastname} 
               onChange={handleChange} 
               margin="dense"
            />
            <Typography 
               variant="p" 
               component="div" 
               sx={{ 
                  fontSize:'1rem', 
                  color:"#c62828" 
               }}>
               {formErrors.lastname}
            </Typography>
            <TextField 
               // className='formControl' 
               label="email@example.com" 
               variant="filled"
               type='email' 
               name='email'
               value={formValues.email} 
               onChange={handleChange} 
               margin="dense"
            />
            <Typography 
               variant="p" 
               component="div" 
               sx={{ 
                  fontSize:'1rem', 
                  color:"#c62828" 
               }}>
               {formErrors.email}
            </Typography>
            <TextField 
               // className='formControl'
               label="sameEmail@example.com" 
               variant="filled"
               type='email'
               name='emailCheck' 
               value={formValues.emailCheck}
               onChange={handleChange} 
               margin="dense"
            />
            <Typography 
               variant="p" 
               component="div" 
               sx={{ 
                  fontSize:'1rem', 
                  color:"#c62828"
               }}>
               {formErrors.email}
            </Typography>

            {formValues.email !== formValues.emailCheck ? 
            <Typography 
               variant="p" 
               component="div" 
               sx={{ 
                  fontSize:'1rem', 
                  color:"#c62828"
               }}>
               Email doesn't match
            </Typography>
         : true }
         </form>
            
         <Button 
            variant='outlined' 
            color="success"
            sx={{ 
              width:'20%', 
              fontSize:'1rem', 
              marginTop:'1rem', 
              '&:hover': { 
                  color:'success' 
              } 
            }}
            onClick={handleSubmit} 
            type='submit'>
            Send
            </Button>
      </div>
   );
}

export default Order