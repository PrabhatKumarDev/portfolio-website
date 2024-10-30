import React, { useEffect, useRef } from "react";
import "./Skill.css";

const Skill = ({ name, icon ,percentage}) => {
    const progressRef = useRef(null);
    useEffect(() => {
      const progressBar = progressRef.current;
      if (progressBar) {
        // Set initial position
        progressBar.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
          // Trigger the animation
          progressBar.style.transform = `translateX(-${100-percentage}%)`;
        }, 200);
      }
    }, []);  
  
  return (
    <div className="skills-card">
      <div className="skill-with-icon">
        <h1>{name}</h1>
        <img src={icon} alt={name} />
      </div>
      <div className="progress-container">
      <div className="progress-bar">
        <div className="progress" ref={progressRef} ></div>
      </div>
      <h1>{percentage}%</h1>
      </div>
    </div>
  );
};

export default Skill;
