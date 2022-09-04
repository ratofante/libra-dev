import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/nav/Logo';
import { RiMenu4Fill as BtnIcon } from 'react-icons/ri';
import { VscChromeClose as BtnClose } from 'react-icons/vsc';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(null);


  useEffect(() => {
    window.innerWidth < 650 && setToggleNavbar(true);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 650 && window.scrollY < 50) {
        setToggleNavbar(false);
      } else {
        setToggleNavbar(true);
      }
    })
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50 && window.innerWidth >= 650) {
        setToggleNavbar(true);
      } else if (window.scrollY < 50 && window.innerWidth >= 650) {
        setToggleNavbar(false);
      }
    })
  }, []);

  function toggleAriaHidden(e) {
    if (e.attributes['aria-hidden'].nodeValue === "true") {
      e.attributes['aria-hidden'].nodeValue = "false";
    } else {
      e.attributes['aria-hidden'].nodeValue = "true";
    }
  }
  function btnAnimation(e) {
    e.classList.toggle('shrinkAndGrow');
    setTimeout(() => {
      e.classList.remove('shrinkAndGrow');
    }, 300)
  }
  function sideMenuToggle() {
    toggleAriaHidden(document.getElementById('navbar'));
    btnAnimation(document.getElementById('navbarBtn'));
    setTimeout(() => {
      setMenuToggle(!menuToggle);
    }, 200);
  }

  return (
    <div className='navbar'>
      <Logo />
      {toggleNavbar ? sideNavBar() : topNavbar()}
    </div>
  )

  function sideNavBar() {

    return (
      <>
        <button onClick={() => sideMenuToggle()} id="navbarBtn" className='navbarBtn' aria-controls='navbar'>
          {menuToggle ? <BtnClose fillOpacity="1" strokeOpacity="0" /> : <BtnIcon fillOpacity="1" strokeOpacity="0" />}
        </button>
        <nav id="navbar" className="sideNavbar" aria-hidden="true">
          <ul>
            <li>
              <Link onClick={() => { sideMenuToggle(); window.scrollTo(0, 0) }} className="navLinks" to="/">Home</Link>
            </li>
            <li>
              <Link onClick={() => { sideMenuToggle(); window.scrollTo(0, 0) }} className="navLinks" to="/my-work/trabajos">My Work</Link>
            </li>
            <li>
              <a href="#contactView" onClick={() => { sideMenuToggle() }} className="navLinks">Contact</a>
            </li>
          </ul>
        </nav>
      </>
    )
  }

  function topNavbar() {
    return (
      <nav className='topNavbar'>
        <ul>
          <li className='topNavList'>
            <Link className="navLinks" to="/">Home</Link>
          </li>
          <li className='topNavList'>
            <Link className="navLinks" to="/my-work/trabajos">My Work</Link>
          </li>
          <li className='topNavList'>
            <a className="navLinks" href="#contactView">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar