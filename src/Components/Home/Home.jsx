import React from "react";
import { useState,useRef,useEffect } from "react";
import "./Home.css";
import Modal from "../Modal/Modal";
import { gsap } from "gsap";

const Home = () => {
  const homeref = useRef(null);
  const [showModal, setIsModal] = useState(false);
  const closeModel = () => {
    setIsModal(false);
  };

  useEffect(()=>{
    let t3=gsap.timeline({
      delay:0.7,
      duration:0.5
    })
    t3.fromTo(homeref.current,{
      opacity:0,
      scale:0.5
    },{
      opacity:1,
      scale:1
    })
  },[])
 
  return (
    <>
      <div id="home" ref={homeref}>
        <div className="info-container">
          <h1>Prabhat Kumar</h1>
          <p>Computer Science Student | Aspiring Software Engineer</p>
          <button
            onClick={() => {
              setIsModal(true);
            }}
          >
            <a href="#preventreload">Learn More</a>
          </button>
        </div>
      </div>
          {showModal && <Modal closeModel={closeModel} />}
    </>
  );
};

export default Home;
