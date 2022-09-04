import React, { useContext, useEffect } from 'react'
import { PortfolioContext } from '../../PortfolioContext'

const Portfolio = () => {
   const { section, portfolio } = useContext(PortfolioContext);
   const data = portfolio[section];

   useEffect(() => {
      function createObserver() {
         const options = {
            root: null,
            rootMargin: '0px 0px',
            threshold: 0
         }
         return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  entry.target.childNodes.forEach(child => {
                     //console.log('trigger');
                     child.classList.toggle('scaleUpSlow');
                  });
               }
            })
         }, options);
      }
      const fichasObserver = createObserver();
      const columns = document.querySelectorAll('.ficha__column');
      columns.forEach(c => {
         fichasObserver.observe(c);
      });
   }, [])

   return (<>
      <div className="fichasContainer">
         {data.map(e => {
            return (
               <div className={`ficha ficha__${section}`} key={e.id}>
                  <div className="ficha__title">
                     <h3>{e.title}</h3>
                  </div>
                  <div className="ficha__layout">
                     <div className="ficha__column">
                        <div className="ficha__description">
                           <h5 className='ficha__subTitle'>Descripción : </h5>
                           <p>{e.description}</p>
                        </div>
                        <div className="ficha__caracteristicas">
                           <h5 className='ficha__subTitle'>Características : </h5>
                           <ul>
                              {e.caracteristicas.map((e, index) => {
                                 return (
                                    <li key={index}>{e}</li>)
                              })}
                           </ul>
                        </div>
                        <div className="ficha__enlaces">
                           <h5 className="ficha__subTitle">Enlaces :</h5>
                           {e.link !== '' && <a href={e.link}>{e.link}</a>}
                           {e.repo !== '' && <a href={e.repo}>{e.repo}</a>}
                        </div>
                     </div>
                     <div className="ficha__column">
                        <div className="ficha__media">
                           <div dangerouslySetInnerHTML={{ __html: e.media }}></div>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   </>)
}

export default Portfolio