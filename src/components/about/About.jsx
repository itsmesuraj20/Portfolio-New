import React from 'react'
import './about.css'
import ME from '../../assets/M2.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => (
  <section id='about'>
    <h5>
      Get To Know Me
    </h5>
    <h2>
      ABOUT ME
    </h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="Real Image of Mine From Linkedin" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h2>Experience</h2>
            <small>1 months+ experience and learning </small>

          </article>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h2>Projects</h2>
            <small>10+ Completed </small>

          </article>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h2>Client</h2>
            <small>200+ Worldwide </small>

          </article>
        </div>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque pariatur impedit porro numquam, repellat illum debitis odio sint, eius at eaque provident, consequuntur nisi placeat ad! Commodi quibusdam laudantium omnis!
        </p>
        <br/>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
)

export default About