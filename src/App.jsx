import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Test from './components/testimonial/test'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () =>  {
  return (
    <>
      <Header></Header>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Test/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App