import React from 'react'
import profile_img from '../../assets/profile-pic.png'
import './About.css'


const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className="first-container">
            <h1>About Me</h1>
        </div>
        <div className="second-container">
            <img src={profile_img} alt="Profile Image" />
            <div className="paragraph-container">
            <p>Hello! I'm Prabhat Kumar, a passionate Computer Science student with a keen interest in software development and artificial intelligence. I love solving complex problems and building innovative solutions that make a difference.</p>
            <br/>
            <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on tech entrepreneurship.</p>

            </div>
        </div>
    </div>
  )
}

export default About
