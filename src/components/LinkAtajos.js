import React, { useContext } from 'react'
import { WorkContext } from '../WorkContextProvider';

import Dot1 from '../images/list-dot-1.svg';
import Dot2 from '../images/list-dot-2.svg';
import Dot3 from '../images/list-dot-3.svg';


const LinkAtajos = () => {

   const { section, setTrabajos, setRecursos, setProyectosPersonales } = useContext(WorkContext);


   return (
      <div className="linksAtajos">
         <div onClick={() => { setTrabajos() }} className="linkAtajo">
            <img
               className={section === 'trabajos' ? 'rotate' : ''}
               src={Dot2}
               alt="colorful dot, link to Trabajos" />
            <h4 className={section === 'trabajos' ? 'fw-700' : ''}>Trabajos</h4>
         </div>
         <div onClick={() => { setProyectosPersonales() }} className="linkAtajo">
            <img
               className={section === 'proyectos' ? 'rotate' : ''}
               src={Dot1}
               alt="colorful dot, link to Proyectos Personales" />
            <h4 className={section === 'proyectos' ? 'fw-700' : ''}>Proyectos<br></br>Personales</h4>
         </div>
         <div onClick={() => { setRecursos() }} className="linkAtajo">
            <img
               className={section === 'recursos' ? 'rotate' : ''}
               src={Dot3}
               alt="colorful dot, link to Recursos" />
            <h4 className={section === 'recursos' ? 'fw-700' : ''}>Recursos</h4>
         </div>
      </div>
   )
}

export default LinkAtajos