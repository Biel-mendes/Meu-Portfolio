import React from 'react';
import '../styles/components/cardsm.css';
import minhaFoto from '../assets/minhafoto.svg';

const Cardsm = () => {
    return (
    <div className="cardsm" id="sobre">
            <main className="cardsm__container">
                <img src={minhaFoto} alt="minha-foto" className='cardsm__image' />
                <div className="cardsm__content">
                    <h2 className='cardsm__title'>Sobre Mim</h2>
                    <p className='cardsm__description'>Sou Gabriel Mendes, 
                        estudante do último semestre 
                        de Desenvolvimento de Software 
                        Multiplataforma na Fatec Zona Leste.
                         Tenho formação teórica sólida em Java, 
                         adquirida ao longo da graduação, 
                         e atualmente atuo como desenvolvedor 
                         na XC Soluções, trabalhando 
                         como Fullstack Developer com 
                         foco em Node.js e React.js.</p>
                </div>
            </main>
        </div>
    );
}

export default Cardsm;