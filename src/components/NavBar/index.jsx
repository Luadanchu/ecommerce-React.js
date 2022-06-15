import React from "react";
import './style.css';
import CardWidget from '../CardWidget/index.jsx'

const NavBar = () =>{
    return(
        <nav>
            <ol>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#productos">Tienda</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ol>
            <CardWidget/>
        </nav>
    )
}

export default NavBar;