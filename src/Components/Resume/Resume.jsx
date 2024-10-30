import React from 'react'

const Resume = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = './resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <div className='resume-wrapper' id='resume'>
      <h1>My Resume</h1>
      <p>Download my resume to learn more about my education, experience, and skills.</p>
      <button onClick={()=>{
        downloadResume()
      }}>
      <i class="fa-solid fa-download"></i>
      Download Resume
      </button>
    </div>
  )
}

export default Resume
