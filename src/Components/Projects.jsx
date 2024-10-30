import React from "react";
import "./Projects.css";
import Project from "./Project";

const Projects = ({data}) => {
  return (
    <div id="projects">
      <header>
        <h1>My Projects</h1>
      </header>
      <div className="projects-container">
        {data.map((item)=>
          (
            <Project item={item}/>
          )
        )}
      </div>
      <a href="#preventreload" className="load">Load More projects</a>
    </div>
  );
};

export default Projects;
