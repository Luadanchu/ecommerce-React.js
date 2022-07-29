import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { Typography } from '@mui/material'
import './style.css'

const Footer = () => {
  return (
    <div className='containerGralFooter'>
      <div className='containerFooter'>
        <div className='containerDivFooter'>
          <img className="logoFooter" src='/imagenes/navLogo.png' alt="Logo" />
          <Typography 
          variant="p" 
          color="#fafafa" 
          component="div" 
          sx={{ 
            fontSize:'1rem', 
            textAlign:'center',  
            }}>
          Queremos que todo el mundo trace su camino.
        </Typography>
        <Typography 
          variant="p" 
          color="#fafafa" 
          component="div" 
          sx={{ 
            fontSize:'1rem', 
            textAlign:'center',
            marginBottom: '1rem'  
            }}>
          Y que todo el mundo tome mate.
        </Typography>
          <BsInstagram size={30} />
        </div>
        <div className='containerDivFooter'>
          <Typography 
            variant="h3" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center',
              marginBottom: '1rem'  
              }}>
            TIENDA
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Shop
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Mayoristas
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Envíos a todo el país y al exterior
          </Typography>
        </div>
        <div className='containerDivFooter'>
        <Typography 
            variant="h3" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center',
              marginBottom: '1rem'  
              }}>
            FAQ'S
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Preguntas Frecuentes
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Contacto
          </Typography>
          <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            Nosotros
          </Typography>
        </div>
      </div>
      <Typography 
            variant="p" 
            color="#fafafa" 
            component="div" 
            sx={{ 
              fontSize:'1rem', 
              textAlign:'center'  
              }}>
            @2022 - Adanchú Lucila - Tp final React.js - CoderHouse
          </Typography>
    </div>
  );
}

export default Footer