import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import {MdTextsms} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiTimeFive /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdTextsms /></a>
    </nav>
  )
}

export default Nav