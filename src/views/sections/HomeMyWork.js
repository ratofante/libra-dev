import React from 'react'
import GoToBtn from '../../components/GoToBtn'
import HomeWorkSection from '../../components/HomeWorkSection'
import LinkAtajos from '../../components/LinkAtajos'
// import { WorkContext } from '../../WorkContextProvider'
import WorkContextProvider from '../../WorkContextProvider'

const HomeMyWork = () => {
  return (
    <main>
      <section className='myWork'>
        <div className="myWork__text">
          <h2 className='secTitle'>My Work</h2>
          <p className='mainText'>Puedes encontrar mis trabajos y proyectos personales con detalles sobre las tecnologías implementadas.</p>
        </div>
        <WorkContextProvider>
          <div className="myWork__links">
            <LinkAtajos />
          </div>
          <div className="myWork__display">
            <HomeWorkSection />
          </div>
        </WorkContextProvider>
        <div className="myWork__button">
          <GoToBtn props={{
            target: '#contactView',
            color: 'bg-light-blue',
            mensaje: 'Contact Me'
          }} />
        </div>
      </section>
    </main>
  )
}

export default HomeMyWork