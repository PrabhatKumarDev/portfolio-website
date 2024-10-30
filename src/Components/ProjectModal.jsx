import React from "react";
import "./ProjectModal.css";
import { useEffect } from "react";

const ProjectModal = ({ closeModal, name, desc, tech_stack, github_link, live_link }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="modal-wrapper" onClick={closeModal} id="project-modal-wrapper">
      <div className="project-modal">
        <div className="flex-container">
          <h1>{name}</h1>
          <a href="#preventreload" onClick={closeModal}><i class="fa-solid fa-xmark"></i></a>
        </div>
        <p>{desc}</p>
        <ul className="tech-used">
          Technologies Used:
          {tech_stack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className="button-container">
          <a href={github_link} target="_blank">View on Github</a>
          <a href={live_link} target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
