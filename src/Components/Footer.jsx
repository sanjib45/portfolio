import React from "react";
import Typewriter from "typewriter-effect";

function Footer() {
  return (
    <>
      <div className="footer-section" data-aos="fade-right">
        <div className="containe-fluid home-container" >
          <div className="container home-content">
            <h2 data-aos="zoom-in">I AM A</h2>
            <h1 data-aos="fade-left">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Devloper",
                    "Mern Stack Devloper",
                    "React JS Devloper",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

          </div>
        </div>

        <div className="footer-btn">
          <div className="info">
            <span>Copyright@2024 by SANJIB SANTRA || All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
