import { listaProjetos } from '../assets/proje'
import React, { useState } from 'react';
import '../styles/components/projetos.css';
import github from '../assets/github.svg'

const Projetos = () => {
    const [atual, setAtual] = useState(0);
    const [animacao, setAnimacao] = useState('');

    const handleDotClick = (index) => {
        if (index !== atual) {
            setAnimacao(index > atual ? 'slide-left' : 'slide-right');
            setTimeout(() => {
                setAtual(index);
                setAnimacao('');
            }, 300);
        }
    };

    const item = listaProjetos[atual];

    return (
    <div className='projetos' id='projetos'>
            <section className="projetos__container">
                <h2 className="projetos__title">Projetos</h2>
                <div className="projetos__carrossel">
                    <div className={`projeto__card ${animacao}`}>
                        <div className="projeto__box__imagem">
                            <img src={item.img} alt={item.nome}  className='projeto__img'/>
                        </div>
                        <div className="projeto__info">
                            <h3 className="projeto__nome">{item.nome}</h3>
                            <p className="projeto__descricao">
                                {item.descricao }
                            </p>
                            <div className="projeto__github">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carrossel__navigation">
                        {listaProjetos.map((_, index) => (
                            <button
                                key={index}
                                className={`nav__dot ${index === atual ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Projetos;