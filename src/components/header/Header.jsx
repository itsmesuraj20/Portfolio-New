import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>Suraj Singh</h1>

        <h5 className="text-light">FrontEnd Web Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me"></div>
       <img src={ME} alt="me"  />
      </div>

      <a href="#contact" className='scroll-down'>Scroll Down</a>

    </header>
  )
}

export default Header