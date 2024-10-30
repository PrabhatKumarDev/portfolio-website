import React, { useState } from 'react'
import BlogModal from './BlogModal'
const Blog = ({ data}) => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <div className='blog-wrapper'>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <button onClick={() => setOpenModal(true)}>Read More</button>
    </div>
    {openModal && <BlogModal closeModal={() => setOpenModal(false)} title={data.title} date={data.date} content={data.content} />}
    </>
  )
}

export default Blog
