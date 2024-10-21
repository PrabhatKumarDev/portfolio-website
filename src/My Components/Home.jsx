import React from "react";
import { useState } from "react";
import "./Home.css";
import Modal from "./Modal";

const Home = () => {
  const [showModal, setIsModal] = useState(false);
  const closeModel = () => {
    setIsModal(false);
  };
 
  return (
    <>
      <div id="home">
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
          {showModal && <Modal closeModel={closeModel} />}
        </div>
      </div>
    </>
  );
};

export default Home;
