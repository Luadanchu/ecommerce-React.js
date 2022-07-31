import React, { useContext, useState, useEffect, useRef } from 'react'
import confirmOrder from '../../auxFunctions/confirmOrder';
import { ShopCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material'
import emailjs from '@emailjs/browser';
import './style.css'

const Order = () => {

   const {cartItems, totalPrice, clear} = useContext(ShopCart);
   const nav = useNavigate();
   const [formValues, setFormValues] = useState('');
   const [formErrors, setFormErrors] = useState({});
   const [submit, setSubmit] = useState(false)
   const form = useRef();

   const newOrder = (date, firstname, lastname, email, cart, total) => {
      return {
         date: new Date().toLocaleString(),
         buyer:{
            firstname: firstname,
            lastname: lastname,
            email: email,
         },
         items: cartItems,
         total: {totalPrice}
      }
   }
   
   const sendEmail = (e) => {  
      emailjs.sendForm('service_fdlefua', 'template_3ecg3j4', form.current, 'JQFtY2HVQ3nV1y5aE')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
      });
   };

   const finalOrder = async () => {
      const printOrder = newOrder(new Date().toLocaleString(), formValues.firstname, formValues.lastname, formValues.email, cartItems, totalPrice)
      confirmOrder(cartItems, printOrder)
      sendEmail()
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
         errors.firstname = "No valid format"
      }
      if(!values.lastname){
         errors.lastname = "Last name is required"
      }else if(!rgx.test(values.lastname)){
         errors.lastname = "No valid format"
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
      if(Object.keys(formErrors).length === 0 && submit){
         finalOrder()
      }
   })


   return (
      <div className='formContainer'>
         <form ref={form} onSubmit={sendEmail} >
            {!formErrors.firstname ?
               <TextField 
                  label="First name" 
                  variant="filled"
                  type="text" 
                  name='firstname'
                  value={formValues.firstname} 
                  onChange={handleChange} 
                  margin="dense"
               />
               :
               <TextField
                  error
                  id="filled-error-helper-text"
                  defaultValue="Hello World"
                  helperText= {formErrors.firstname}
                  variant="filled"
               />
            }
            {!formErrors.lastname ?
               <TextField  
                  label="Last name" 
                  variant="filled" 
                  type="text"
                  name='lastname'
                  value={formValues.lastname} 
                  onChange={handleChange} 
                  margin="dense"
               />
               :
               <TextField
                  error
                  id="filled-error-helper-text"
                  defaultValue="Hello World"
                  helperText= {formErrors.lastname}
                  variant="filled"
               />
            }
            {!formErrors.email ?
               <TextField 
                  label="email@example.com" 
                  variant="filled"
                  type='email' 
                  name='email'
                  value={formValues.email} 
                  onChange={handleChange} 
                  margin="dense"
               />
               :
               <TextField
                  error
                  id="filled-error-helper-text"
                  defaultValue="Hello World"
                  helperText= {formErrors.email}
                  variant="filled"
               />
            }
            {!formErrors.emailCheck ?
               <TextField 
                  label="sameEmail@example.com" 
                  variant="filled"
                  type='email'
                  name='emailCheck' 
                  value={formValues.emailCheck}
                  onChange={handleChange} 
                  margin="dense"
               />
               :
               <TextField
                  error
                  id="filled-error-helper-text"
                  defaultValue="Hello World"
                  helperText= {formErrors.email}
                  variant="filled"
               />
            }
            {formValues.email !== formValues.emailCheck ? 
               <Typography 
                  variant="p" 
                  component="div" 
                  sx={{ 
                     fontSize:'.8rem', 
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