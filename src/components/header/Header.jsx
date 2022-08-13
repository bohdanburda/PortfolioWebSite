import React from 'react'
import './header.css'
import CTA from './CTA'
import MYPHOTO from '../../assets/myphoto.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hi, I`m</h5>
            <h1>Bohdan Burda</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />

            <img className="mysection" src= {MYPHOTO} alt="" />
        </div>
    </header>
  )
}

export default Header