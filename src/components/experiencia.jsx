import React, { useState, useRef } from 'react';
import '../styles/components/experiencias.css';
import { listaExperiencia } from '../assets/exep';

const Experiencia = () => {
    const [atual, setAtual] = useState(0);
    const [animacao, setAnimacao] = useState('');
    const total = listaExperiencia.length;
    const timeoutRef = useRef(null);

    const handlePrev = () => {
        setAnimacao('slide-right');
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setAtual((prev) => (prev === 0 ? total - 1 : prev - 1));
            setAnimacao('');
        }, 350);
    };

    const handleNext = () => {
        setAnimacao('slide-left');
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setAtual((prev) => (prev === total - 1 ? 0 : prev + 1));
            setAnimacao('');
        }, 350);
    };

    const item = listaExperiencia[atual];

    return (
    <div className="experiencia" id="experiencia">
            <section className="experiencia__container">
                <h2 className="experiencia__title">Experiência</h2>
                <div className="carrossel">
                    <button className="carrossel__seta" onClick={handlePrev}>&lt;</button>
                    <div className={`experiencia__card carrossel__animacao ${animacao}`}>
                        <img src={item.img} alt={item.empresa} />
                        <div className="experiencia__info">
                            <h3 className="experiencia__empresa">{item.empresa}</h3>
                            <p className="experiencia__descricao">{item.descricao}</p>
                        </div>
                    </div>
                    <button className="carrossel__seta" onClick={handleNext}>&gt;</button>
                </div>
            </section>
        </div>
    );
}

export default Experiencia;