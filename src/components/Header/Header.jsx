import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
function Header(){
    return (
    <header className="container">
         <div className="container-Section">
             <div className="logo">
                 <h1>Pousada<span>Secreta</span></h1>
             </div>
         <nav className="navBar">
            <ul>
              <li>
                <Link to="/" className="navLink">Inicio</Link>
              </li>
              <li>
                <Link to="/sobre/" className="navLink">Sobre</Link>
              </li>
              <li>
                <Link to="/rotas/" className="navLink">Rotas</Link>
              </li>
              </ul>
        </nav> 
     </div>
    </header>
    );
}

export default Header;