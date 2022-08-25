import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://t.me/bohdanburda' target="_blank"><BsTelegram /></a>
        <a href='https://github.com/bohdanburda' target="_blank"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/bohdan-burda-029644154/' target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials