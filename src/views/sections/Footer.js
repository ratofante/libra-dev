import React from 'react'

import SeparatorTop from '../../images/up3.svg'
import FooterEnd from '../../images/mobile-footer-end.svg'
import Logo from '../../images/logo.png'
import GitHub from '../../images/icons/github-svgrepo-com.svg'
import Linkedin from '../../images/icons/linkedin-icon2.svg'
import Codepen from '../../images/icons/codepen-svgrepo-com.svg'

const Footer = () => {

   function goToTop() {
      window.scrollTo(0, 0);
   }

   return (
      <footer className='footer'>
         <div className="footer__top">
            <img src={SeparatorTop} alt="" />
         </div>
         <div className="footer__body">
            <div onClick={() => { goToTop() }} id="footerLogo" className="footer__body__logo">
               <img src={Logo} alt="Libra Dev Logo" />
            </div>
            <div className="footer__body__text">
               <h2>LibraDev</h2>
               <p>by</p>
               <p>Rodrigo</p>
               <p>González</p>
               <p>Wilkens</p>
            </div>
            <div className="footer__body__icons">
               <a href="https://github.com/ratofante" className="footer__body__icons__link">
                  <img src={GitHub} alt="Github Logo" />
               </a>
               <a href="https://www.linkedin.com/in/rodrigo-g-wilkens/" className="footer__body__icons__link">
                  <img src={Linkedin} alt="Linkedin Logo" />
               </a>
               <a href="https://codepen.io/ratofante" className="footer__body__icons__link">
                  <img src={Codepen} alt="Codepen Logo" />
               </a>
            </div>
         </div>
         <div className="footer__bottom">
            <img src={FooterEnd} alt="" />
         </div>
      </footer>
   )
}

export default Footer