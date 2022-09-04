import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import LogoImg from '../../images/logo.png'

const Logo = () => {

   const [logoToggle, setLogoToggle] = useState(null);
   const location = useLocation().pathname;

   useEffect(() => {
      function callback(entries, observer) {
         entries.forEach(entry => {
            entry.isIntersecting ? setLogoToggle(false) : setLogoToggle(true);
         });
      }
      function createObserver() {
         const options = {
            root: null,
            rootMargin: '200px 0px',
            threshold: 1.0
         }
         return new IntersectionObserver(callback, options);
      }
      const observer = createObserver();
      observer.observe(document.querySelector("#footerLogo"));
      observer.observe(document.querySelector('#bigLogo'));

   }, [location])

   function goToTop() {
      window.scrollTo(0, 0);
   }

   return (
      <div onClick={() => { goToTop() }} className={logoToggle ? 'logo scaleUp' : 'logo scaleDown'}>
         <img src={LogoImg} alt="logo" />
      </div>
   )
}

export default Logo