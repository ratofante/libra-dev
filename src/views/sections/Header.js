import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import GoToBtn from '../../components/GoToBtn'

import Logo from '../../images/logo.png'
import Dot1 from '../../images/list-dot-1.svg';
import Dot2 from '../../images/list-dot-2.svg';
import Dot3 from '../../images/list-dot-3.svg';



const Header = () => {
   const location = useLocation().pathname;
   return (
      <header>
         <section className="home">
            <div className="home__intro">
               <div className="home__intro__img">
                  <img id="bigLogo" src={Logo} alt="logo LibraDev" />
               </div>
               <div className="home__intro__text">
                  <h1 className='mainTitle'>
                     {location === '/' ? 'LibraDev' : 'MyWork'}
                  </h1>
                  <p className='mainText'>{
                     location === '/' ? "¡Hola! Mi nombre es Rodrigo González Wilkens. Vivo en Buenos Aires, Argentina y soy desarrollador web. Bienvenido a mi portfolio." :
                        "Portfolio de trabajos. "
                  }</p>
               </div>
            </div>
            <div className={location === '/' ? "home__atajos" : "home__workAtajos"}>
               {location === '/' && atajosHeader()}
            </div>
            {location === '/' && goToBtn()}
         </section>
      </header>
   )

   function goToBtn() {
      return (
         <div className='home__callToAction'>
            <GoToBtn props={{
               target: '#aboutView',
               mensaje: 'Go!',
               color: 'bg-light-brown'
            }} />
         </div>
      )
   }
   function atajosHeader() {
      return (
         <div className="linksAtajos">
            <Link to="/my-work/trabajos" className="linkAtajo">
               <img src={Dot2} alt="colorful dot, link to Trabajos" />
               <h4>Trabajos</h4>
            </Link>
            <Link to="/my-work/proyectos" className="linkAtajo">
               <img src={Dot1} alt="colorful dot, link to Proyectos Personales" />
               <h4>Proyectos<br></br>Personales</h4>
            </Link>
            <Link to="/my-work/recursos" className="linkAtajo">
               <img src={Dot3} alt="colorful dot, link to Recursos" />
               <h4>Recursos</h4>
            </Link>
         </div>
      )
   }
}

export default Header