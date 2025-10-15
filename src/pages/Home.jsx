import React from 'react';
import Navbar from '../components/navbar';
import Cardsm from '../components/cardsm';
import Conhecimentos from '../components/conhecimentos';
import Experiencia from '../components/experiencia';
import Projetos from '../components/projetos';
import Contato from '../components/contato';
import Rodape from '../components/rodape';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cardsm />
            <Conhecimentos />
            <Experiencia />
            <Projetos />
            <Contato />
            <Rodape />
        </div>
    );
}

export default Home;