import React from "react";
import { useEffect } from "react";

const BlogModal = ({ closeModal, title, date, content }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="modal-wrapper" onClick={closeModal} id="blog-modal-wrapper">
      <div className="project-modal" id="blog-modal">
        <div className="flex-container" id="blog-modal-header">
          <h1>{title}</h1>       
          <a href="#preventreload" onClick={closeModal}>
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
        <p>{date}</p>
        <p>
          {content}
        </p>
        <div>
            <button id="button-container" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
