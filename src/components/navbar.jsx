import React from 'react';
import '../styles/components/navbar.css';
import Cardsm from './cardsm'
import Conhecimentos from './conhecimentos';
import Experiencia from './experiencia';
import Projetos from './projetos';
import Contato from './contato';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li><a href="#sobre" className='navbar__link'>Sobre Mim</a></li>
                <li><a href="#conhecimentos" className='navbar__link'>Conhecimentos</a></li>
                <li><a href="#experiencia" className='navbar__link'>Experiências</a></li>
                <li><a href="#projetos" className='navbar__link'>Projetos</a></li>
                <li><a href="#contato" className='navbar__link'>Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;