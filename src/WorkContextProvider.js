import React, { useState } from 'react'

export const WorkContext = React.createContext();

export function WorkContextProvider({ children }) {

  const [section, setSection] = useState('trabajos');

  function setProyectosPersonales() {
    setSection('proyectos');
  }
  function setRecursos() {
    setSection('recursos');
  }
  function setTrabajos() {
    setSection('trabajos');
  }

  return (
    <WorkContext.Provider value={{
      section,
      setProyectosPersonales,
      setRecursos,
      setTrabajos
    }}>
      {children}
    </WorkContext.Provider>
  )
}

export default WorkContextProvider;