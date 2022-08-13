import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='' target="_blank"><BsTelegram /></a>
        <a href='' target="_blank"><FaGithub /></a>
        <a href='' target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials