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
        <li className="navLink"><Link to="/category/Mates">Mates</Link></li>
        <li className="navLink"><Link to='/category/Yerbera'>Yerbera</Link></li>
        <li className="navLink"><Link to='/category/Equipos de mate'>Equipos</Link></li>
      </ol>
      <CardWidget />
    </nav>
  )
}

export default NavBar;