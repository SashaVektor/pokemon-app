import React from 'react'
import Wrapper from '../sections/Wrapper'
import avatar from "../assets/avatar.png"
import { FaGithub, FaInstagram } from 'react-icons/fa'

const About = () => {
  return (
    <div className='about'>
      <img src={avatar} alt="avatar" className='profile-image'/>
      <h1 className='profile-text'>Hi, i am Alex Vektor</h1>
      <h2 className='profile-text'>The creator of this wonderfull application</h2>
      <h4 className='profile-text'>This project is created for education and for my portfolio</h4>
      <div className='profile-links'>
        <a href="https://github.com/SashaVektor">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sasha_veklich/">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)
