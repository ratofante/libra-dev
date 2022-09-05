import React from 'react'

import GoToBtn from '../../components/GoToBtn'
import Technologies from '../../components/Technologies'

import Avatar from "../../images/avatar1.jpg"
import UTN from "../../images/utnBA.png"
import CoderHouse from "../../images/coderhouse.jpg"
import { TbFileDownload as Download } from 'react-icons/tb'

const HomeAbout = () => {
   return (<main>
      <section className="about">
         <div className="about__intro">
            <div className="about__intro__img">
               <img src={Avatar} alt="Rodrigo González Wilkens foto" />
            </div>
            <div className="about__intro__text">
               <h2 className='secTitle'>About Me</h2>
               <p className='mainText'>Me formé en filosofía en la Universidad de Buenos Aires. Como nerd autodidacta me enamoré de la programación. <br></br>
                  Me apasiona la planificación de los proyectos y el pasaje de su diseño a su implementación concreta, sumado al hecho de que es un ámbito en constante desarrollo donde siempre hay algo nuevo que aprender.
               </p>
            </div>
         </div>
         <div className="about__separador">
            <div className="about__cv">
               <div className="about__cv__info">
                  <h3 className="about__cv__info__label">Desarrollador Web</h3>
                  <div className="cvGroup">
                     <span className="label">Formación:</span>
                     <ul>
                        <li className='cvData'>PHP y MySQL - Experto Universitario <span><img src={UTN} alt="logo UTN" /></span></li>
                        <li className='cvData'>Beca Neoris - Desarrollador Full Stack <span><img src={UTN} alt="logo UTN" /></span></li>
                        <li className='cvData'>Carrera de FrontEnd <span><img src={CoderHouse} alt="logo coderhouse" /></span></li>
                     </ul>
                  </div>
               </div>
               <a href="/RESUME-rodrigo-gonzalez-wilkens.pdf" download>
                  <span>Descargar Curriculum Vitae</span>
                  <Download />
               </a>
            </div>
            <div className="about__technologies">
               <Technologies />
            </div>
         </div>
         <div className="about__button">
            <GoToBtn props={{
               target: '#workView',
               mensaje: 'My work',
               color: 'bg-light-green'
            }} />
         </div>
      </section>
   </main>)
}

export default HomeAbout