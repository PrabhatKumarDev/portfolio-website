import React, { useEffect } from "react";
import "./Cursor.css";
import { gsap } from "gsap";
const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.display="none";
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");
    const onMouseMove = (e) => {
      cursor.style.display="block";
      const { clientX, clientY } = e;
      gsap.to(cursor, {
        x: clientX-12,
        y: clientY-12,
      });
    };
    const onMouseEnterLink = (e) => {
      const link = e.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = (e) => {
        gsap.to(cursor,{scale:1})
        cursorText.style.display="none";
    };
    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  }, []);
  return (
    <div id="custom-cursor">
      <div className="cursor-text">View</div>
    </div>
  );
};

export default Cursor;
