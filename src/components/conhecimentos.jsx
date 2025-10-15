import React, { useState } from "react";
import c from '../assets/c.svg'
import java from '../assets/java.svg'
import node from '../assets/node.svg'
import python from '../assets/python.svg'
import react from '../assets/react.svg'
import spring from '../assets/spring.svg'
import kotlin from '../assets/kotlin.svg'
import sql from '../assets/sql.svg'
import git from '../assets/git.svg'
import '../styles/components/conhecimentos.css'

const conhecimentos = () => {  

    const [userState, setUserState] = useState({
        conhecimentos: [
            { id: 1, imagem: java, nome: "Java", nivel: 4 },
            { id: 2, imagem: kotlin, nome: "Kotlin", nivel: 3 },
            { id: 3, imagem: spring, nome: "SpringBoot", nivel: 4 },
            { id: 4, imagem: python, nome: "Python", nivel: 2 },
            { id: 5, imagem: node, nome: "NodeJS", nivel: 4 },
            { id: 6, imagem: react, nome: "ReactJS", nivel: 3 },
            { id: 7, imagem: sql, nome: "SQL", nivel: 4 },
            { id: 8, imagem: git, nome: "Git", nivel: 4 },
            { id: 9, imagem: c, nome: "C", nivel: 4 },
        ]
    });
    



    return (
    <div className="conhecimentos" id="conhecimentos"> 
            <section className="conhe__container">
                <h2>Conhecimentos</h2>
                <div className="conhe__itens">
                    {userState.conhecimentos.map(conhecimento => (
                        <div className="conhe_item" key={conhecimento.id}>
                            <img src={conhecimento.imagem} alt={conhecimento.nome} className="conhe__img"/>
                            <div className="conhe__niveis">
                                {[1,2,3,4,5].map((nivel) => (
                                    <div
                                        key={nivel}
                                        className={`conhe__nivel${nivel <= conhecimento.nivel ? ' preenchido' : ''}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
};

export default conhecimentos;