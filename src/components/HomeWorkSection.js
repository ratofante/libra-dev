import React, { useContext } from 'react'
import { WorkContext } from '../WorkContextProvider'
import { Link } from 'react-router-dom'

import Codepen from "../images/codepen.jpg"
import Youtube from "../images/Youtube.png"
import socialTrivia1 from "../images/socialTrivia2.jpg"
import socialTrivia2 from "../images/socialTrivia.jpg"
import Solkem from "../images/Solkem.jpg"
import Yetzi from "../images/byYetzi.jpg"


const HomeWorkSection = () => {

   const { section } = useContext(WorkContext);

   return (
      <div className="workSections">
         {section === 'recursos' && recursos()}
         {section === 'proyectos' && proyectos()}
         {section === 'trabajos' && trabajos()}
      </div>
   )

   /* Sections */
   function recursos() {
      return (
         <div className="workSection">
            <div className='workSection__info'>
               <div className="workSection__info__text">
                  <h4>Recursos</h4>
                  <p>Desarrollo de ideas en CodePen y materiales didácticos para clases en Youtube.</p>
               </div>
               <div className="workSection__info__button">
                  <Link to={'/my-work/recursos'} onClick={() => { window.scrollTo(0, 0) }}>
                     <button className='goToBtn btnSmall bg-brown'>Go</button>
                  </Link>
               </div>
            </div>
            <div className='workSection__img'>
               <img src={Codepen} alt="Captura de los trabajos en Codepen" />
               <img src={Youtube} className="bigImg" alt="Captura de video en Youtube bajo la cuenta LibraDev" />
            </div>
         </div>
      )
   }
   function proyectos() {
      return (
         <div className="workSection">
            <div className='workSection__info'>
               <div className='workSection__info__text'>
                  <h4>Proyectos</h4>
                  <p>Actualmente trabajando sobre un juego de trivia social donde los usuarios pueden aportar sus propias preguntas.</p>
               </div>
               <div className='workSection__info__button'>
                  <Link to={'/my-work/proyectos'} onClick={() => { window.scrollTo(0, 0) }}>
                     <button className='goToBtn btnSmall bg-light-green'>Go</button>
                  </Link>
               </div>
            </div>
            <div className='workSection__img'>
               <img src={socialTrivia1} alt="captura proyecto Social Trivia" />
               <img src={socialTrivia2} className="bigImg" alt="captura proyecto Social Trivia" />
            </div>
         </div>
      )
   }
   function trabajos() {
      return (
         <div className="workSection">
            <div className="workSection__info">
               <div className="workSection__info__text">
                  <h4>Trabajos</h4>
                  <p>Realizados para terceros. Diferentes tecnologías y niveles de complejidad. Realizados con dedicación y atención al detalle</p>
               </div>
               <div className="workSection__info__button">
                  <Link to={'/my-work/trabajos'} onClick={() => { window.scrollTo(0, 0) }}>
                     <button className='goToBtn btnSmall bg-light-blue'>Go</button>
                  </Link>
               </div>
            </div>
            <div className="workSection__img">
               <img src={Solkem} alt="Captura de proyecto CRUD Solkem" />
               <img src={Yetzi} alt="Captura de proyecto by-yetzi" />
            </div>
         </div>
      )
   }

}

export default HomeWorkSection