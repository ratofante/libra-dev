import React from 'react'

const GoToBtn = ({ props }) => {
   let msj = props.mensaje;
   const getTarget = (e) => {
      return document.querySelector(e);
   }
   const scrollTo = (e) => {
      e.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   }
   const goToBtn = (e) => {
      let destination = getTarget(e);
      scrollTo(destination);
   }
   return (
      <button onClick={() => { goToBtn(props.target) }} className={`goToBtn ${props.color}`}>
         {msj}
      </button>
   )
}
export default GoToBtn