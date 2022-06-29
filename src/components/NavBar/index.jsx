import React from "react";
import './style.css';
import CardWidget from '../CardWidget/index.jsx'

const NavBar = () =>{
    return(
        <nav>
            <ol>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#tienda">Tienda</a></li>
            </ol>
            <CardWidget value={0}/>
        </nav>
    )
}

export default NavBar;