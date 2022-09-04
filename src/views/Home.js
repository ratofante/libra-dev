import React from 'react'
import { useLocation } from 'react-router-dom'

import HomeAbout from './sections/HomeAbout'
import Contact from './sections/Contact'
import Header from './sections/Header'
import HomeMyWork from './sections/HomeMyWork'
import Separador from './sections/Separador'

const Home = () => {
   const location = useLocation();
   return (
      <>
         <Header location={location.pathname} />
         <Separador props={{ id: 'aboutView' }} />
         <HomeAbout />
         <Separador props={{ id: 'workView' }} />
         <HomeMyWork />
         <Separador props={{ id: 'contactView' }} />
         <Contact />
      </>
   )
}

export default Home