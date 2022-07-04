import React from "react";
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/index.jsx'
import './style.css';

const NavBar = () =>{

  return(
    <nav>
      <Link to='/'><img className="logoNav" src='/imagenes/navLogo.png' alt="logo" /></Link>
      <ol>
        <li className="navLink"><Link to='/'>Home</Link></li>
        <li className="navLink"><Link to="/category/men's clothing">Men</Link></li>
        <li className="navLink"><Link to='/category/jewelery'>Jewelery</Link></li>
        <li className="navLink"><Link to='/category/electronics'>Electronics</Link></li>
        <li className="navLink"><Link to="/category/women's clothing">Women</Link></li>
        <li className="navLink"><Link to='*'>Shop?</Link></li>
      </ol>
      <CardWidget value={3}/>
    </nav>
  )
}

export default NavBar;