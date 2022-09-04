import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import TrabajosData from './TrabajosData';

export const PortfolioContext = React.createContext();

export function PortfolioContextProvider({ children }) {
  const portfolio = TrabajosData;
  const [section, setSection] = useState(useParams().section);
  function cambiarSection(string) {
    setSection(string);
  }

  return (
    <PortfolioContext.Provider value={{ section, cambiarSection, portfolio }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider;