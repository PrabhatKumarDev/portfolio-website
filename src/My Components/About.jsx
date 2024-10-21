import React from 'react'
import profile_img from '../assets/profile-pic.png'


const About = () => {
  return (
    <div className='about-container'>
        <div className="first-container">
            <h1>About Me</h1>
        </div>
        <div className="second-container">
            <img src={profile_img} alt="Profile Image" />
            <p></p>
        </div>
    </div>
  )
}

export default About
