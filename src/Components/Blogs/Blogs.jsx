import React, { useState } from 'react'
import Blog from './Blog.jsx'
import BlogModal from './BlogModal.jsx'
import blogs from '../../blogs'
const Blogs = () => {

  return (
    <div className='blogs-wrapper' id='blog'>
      <h1>Blog</h1>
      <div className='blog-container'>  
        {blogs.map((blog) => (
          <Blog  key={blog.id} data={blog} />
        ))}
      </div>
      
    </div>
  )
}

export default Blogs
