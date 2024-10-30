import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { gsap } from "gsap";

const Navbar = () => {
  const navref = useRef(null);
  useEffect(()=>{
    let t2=gsap.timeline({
      delay:0.5,
      duration:0.5
    })
    t2.fromTo(navref.current,{
      y:-100
    },{
      y:0,
    })
  },[])
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Blog', 'Contact']
  return (
    <>

      <div className='nav-container' ref={navref}>
      <ul>
        {navItems.map((item)=>(<li><a className="link-style-remover" href={`#${item.toLowerCase()}`}>{item}</a></li>))}
      </ul>
      </div>
    </>
  )
}

export default Navbar
