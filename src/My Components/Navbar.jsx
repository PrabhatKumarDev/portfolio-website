import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Blog', 'Contact']
  return (
    <>

      <div className='nav-container'>
      <ul>
        {navItems.map((item)=>(<li><a className="link-style-remover" href={`#${item.toLowerCase()}`}>{item}</a></li>))}
      </ul>
      </div>
    </>
  )
}

export default Navbar
