import React from 'react'
import './about.css'
import ME from '../../assets/M2.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
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
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 months+ experience and learning </small>

          </article>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 months+ experience and learning </small>

          </article>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 months+ experience and learning </small>

          </article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque pariatur impedit porro numquam, repellat illum debitis odio sint, eius at eaque provident, consequuntur nisi placeat ad! Commodi quibusdam laudantium omnis!
          
        </div>
      </div>
    </section>
  )
}

export default About