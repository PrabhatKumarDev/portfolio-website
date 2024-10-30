import React from 'react'
import './Project.css'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

const Project = ({item}) => {
  const [showModal,setModal]=useState(false);
  const closeModal=()=>{
    setModal(false)
  }
  return (
    <div className='project-wrapper'>
      <h1 className="project-title">{item.name}</h1>
      <p className='project-desc'>{item.desc}</p>
      <button onClick={()=>{
        setModal(true);
      }}><a href="#preventreload">Learn More</a></button>
      {showModal && <ProjectModal closeModal={closeModal} name={item.name} desc={item.desc} tech_stack={item.tech_used} github_link={item.github_link} live_link={item.live_link}/>}
    </div>
  )
}

export default Project
