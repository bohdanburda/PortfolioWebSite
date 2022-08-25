import React from 'react'
import './contact.css'
import {BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {MdTextsms} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='text-light'>Contacts</h2>
      <div className='contacts'>
        <div className='grid-contact col'>
          <a href='https://t.me/bohdanburda' target="_blank"><BsTelegram className='grid-item-contact' /></a>
          <a href='https://github.com/bohdanburda' target="_blank"><FaGithub className='grid-item-contact' /></a>
          <a href='https://www.linkedin.com/in/bohdan-burda-029644154/' target="_blank"><BsLinkedin className='grid-item-contact' /></a>
          <a href='https://www.facebook.com/people/Bohdan-Burda/100006283650984/' target="_blank"><AiFillFacebook className='grid-item-contact'/></a>
        </div>
        <div className='contact-me col'>
          <MdTextsms className='contact-icon'/>
          <h1>Contact me</h1>
        </div>
      </div>
    </section>
  )
}

export default Contact