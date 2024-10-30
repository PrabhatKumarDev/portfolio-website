import React, { useRef, useEffect } from "react";
import "./Skills.css";
import Skill from "./Skill";
import javascript from "../assets/Icons/logo-javascript.svg";
import react from "../assets/Icons/react-2.svg";
import node from "../assets/Icons/nodejs-3.svg";
import mongodb from "../assets/Icons/mongodb-icon-1.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
    const skillref = useRef(null);
    useEffect(() => {
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:skillref.current,
            start:"top 60%",
            end:"bottom center",
            scrub:true,
            // markers:true
          }
        });
        tl.fromTo(skillref.current,{
          opacity:0,
          scale:0.5
        },{
          opacity:1,
          scale:1
        })
    }, []);
  return (
    <div className="skills-wrapper" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container" ref={skillref}>
        <Skill name="Javascript" icon={javascript} percentage={90} />
        <Skill name="React" icon={react} percentage={80} />
        <Skill name="Node" icon={node} percentage={85} />
        <Skill name="MongoDB" icon={mongodb} percentage={75} />
      </div>
    </div>
  );
};

export default Skills;
