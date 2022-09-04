import React from 'react'

import Bootstrap from '../images/icons/bootstrap-icon.svg'
import CSS from '../images/icons/css-icon.svg'
import Figma from '../images/icons/figma-icon.svg'
import Git from '../images/icons/git-icon.svg'
import HTML from '../images/icons/html-icon.svg'
import Js from '../images/icons/js-icon.svg'
import Laravel from '../images/icons/laravel-icon.svg'
import PHP from '../images/icons/php-icon.svg'
import PostCSS from '../images/icons/postcss-icon.svg'
import ReactJs from '../images/icons/react-icon.svg'
import Sass from '../images/icons/sass-icon.svg'
import Webpack from '../images/icons/webpack-icon.svg'
import Firebase from '../images/icons/firebase-icon.svg'
import SQL from '../images/icons/mysql-icon.svg'

const Technologies = () => {
   return (
      <section className='technologies'>
         <h3>Technologies</h3>
         <div id="technologies" className='technologies__icons'>
            <img src={Bootstrap} alt="Bootstrap" />
            <img src={CSS} alt="CSS" />
            <img src={Figma} alt="Figma" />
            <img src={Git} alt="Git" />
            <img src={HTML} alt="HTML" />
            <img src={Js} alt="Javascript" />
            <img src={Laravel} alt="Laravel" />
            <img src={PHP} alt="PHP" />
            <img src={PostCSS} alt="PostCSS" />
            <img src={ReactJs} alt="ReactJs" />
            <img src={Sass} alt="Sass" />
            <img src={Webpack} alt="Webpack" />
            <img src={Firebase} alt="Firebase" />
            <img src={SQL} alt="MySQL" />
         </div>
      </section>
   )
}

export default Technologies