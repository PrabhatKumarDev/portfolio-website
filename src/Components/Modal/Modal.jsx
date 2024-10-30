import React from "react";
import "./Modal.css";
import { useEffect } from "react";


const LearnMore = ({closeModel}) => {
  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{
      document.body.style.overflowY="scroll";  
    };
  },[]);
  return (
    <div className="modal-wrapper" onClick={closeModel}>
      <div className="modal-container">
        <header>
          <h1 id="title">About Prabhat Kumar</h1>
          <p id="description">
            Learn more about my journey, skills, and aspirations in the field of
            Computer Science.
          </p>
        </header>
        <div className="about-me">
          <p>
            Hello! I'm Prabhat Kumar, a passionate Computer Science student with
            a keen interest in software development and artificial intelligence.
            I'm constantly exploring new technologies and working on exciting
            projects to expand my skills.
          </p>
          <div className="expertise-section">
            <h2>My areas of expertise include:</h2>
            <ul class="expertise-list">
              <li>Full-stack web development</li>
              <li>Mobile app development</li>
              <li>Machine learning and data analysis</li>
              <li>Cloud computing and DevOps</li>
            </ul>
            <p>
              I'm always looking for new challenges and opportunities to grow as
              a developer. Feel free to explore my portfolio and get in touch if
              you'd like to collaborate or learn more about my work!
            </p>
            <button onClick={closeModel}><a href="#preventreload" >Close</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
