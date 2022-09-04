import React from 'react'
//import { useLocation } from 'react-router-dom'

import { PortfolioContextProvider } from '../PortfolioContext'

import WorkMenu from '../components/WorkMenu'
import Header from './sections/Header'
import HomeContact from './sections/Contact'
import Separador from './sections/Separador'
import Portfolio from './sections/Portfolio'

const MyWork = () => {

   return (
      <>
         <Header />
         <PortfolioContextProvider>
            <WorkMenu />
            <Portfolio />
         </PortfolioContextProvider>
         <Separador props={{ id: 'contactView' }} />
         <HomeContact />
      </>
   )
}

export default MyWork