import React from 'react'

import Linkedin from '../../images/icons/linkedin-icon.svg'
import Whatsapp from '../../images/icons/whatsapp-icon.svg'
import Gmail from '../../images/icons/gmail-svgrepo-com.svg'

const Contact = () => {
   return (
      <aside>
         <section className='contact'>
            <div className="contact__text">
               <h2 className='secTitle'>Contact Me</h2>
               <p className='mainText'>Sea para propuestas laborales, generar redes, invitaciones a colaborar..</p>
               <p className='mainText'>¡Estoy a disposición!</p>
               <p className='mainText'>Puedes contactarme por las siguientes redes:</p>
            </div>
            <div className="contact__redes">
               <a href="http://">
                  <img src={Linkedin} alt="Linkedin Logo" />
               </a>
               <a href="http://">
                  <img src={Whatsapp} alt="Whatsapp Logo" />
               </a>
               <a href="mailto:gwilkens.r@gmail.com" >
                  <img src={Gmail} alt="Gmail Logo" />
               </a>
            </div>
         </section>
      </aside>
   )
}

export default Contact