import React from 'react'

import SeparatorUp from '../../images/up1.svg'
import SeparatorDown from '../../images/down1.svg'

const Separador = ({ props }) => {
   return (
      <div className='separator'>
         <div className="separator__top">
            <img src={SeparatorUp} alt="colorful waves" />
         </div>
         <div className='separator__middle'>

         </div>
         <div id={props.id} className='separator__bottom'>
            <img src={SeparatorDown} alt="colorful waves" />
         </div>
      </div>
   )
}

export default Separador