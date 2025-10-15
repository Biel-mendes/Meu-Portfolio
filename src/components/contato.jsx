import github from '../assets/img_contato/github.svg'
import instagram from '../assets/img_contato/instagram.svg'
import email from '../assets/img_contato/email.svg'
import '../styles/components/contato.css'




const Contato = () => {
    return (
    <div className="contato" id="contato">
            <section className="contato__container">
                <h2 className="contato__titulo">Contato</h2>
                <div className="contato_box">
                    <a href="https://github.com/Biel-mendes">
                        <img src={github} alt="Github" className='contato__img'/>
                    </a>
                    <a href="https://www.instagram.com/biel_mendesportas">
                        <img src={instagram} alt="Instagram" className='contato__img'/>
                    </a>
                    <a href="mailto:gabrielmendes@outlook.com">
                        <img src={email} alt="Email" className='contato__img'/>
                    </a>
                </div>
            </section>
        </div>
    )
}
    
export default Contato;