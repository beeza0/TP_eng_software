import React from 'react'
import './About.css'
import Nav from './navebar.jsx'

const About = props => {
    
    return (
        <>
        <Nav/>
        <div className="container">
            <article className=" about">
                <h1 className="txt_center">A BRO</h1>
                <p>
                    A BRO, Bike Rent Online, está no mercado há anos alugando bicicletas tanto para quem 
                    ama o esporte quanto para os que o fazem proficionalmente. Ela nasceu em uma startap
                    composta por alunos da UFMG e inicialmente alugava velotrois para a competição "Race of Rola Moça".  
                    Atualmente trabalhamos desde "bikes" elétricas proficionais até bicicletas infantis com rodinha.
                </p>
                <h2 className="txt_center">A nossa visão</h2>
                <p>
                    Temos em mente que você tem que ser o melhor no esporte que voçê faz e por isso oferecemos a melhor qualidade 
                    possível. O nosso objetivo é que o ciclismo seja o esporte mais praticado no mundo.
                </p>
                <h3 className="txt_center">
                    Venha cohecer!!
                </h3>
            </article>
        </div>
        </>
    )
}

export default About