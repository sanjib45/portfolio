import React from "react";

function Hero() {
  return (
    <>

      <div className="hero-section-main">
        <div className="app-set-one">
          <div className="main-section-left">
            <h1>
              Expertise:{" "}
              <div className="roller">
                <span id="rolltext">
                  HTML
                  <br />
                  CSS
                  <br />
                  Bootstrap
                  <br />
                  Java
                  <br />
                  Java Script
                  <br />
                  React Js
                  <br />
                  SQL
                  <br />
                  Mongo DB
                  <br />
                  Node Js
                  <br />
                  Express Js
                  <br />
                </span>

                <br />
              </div>
            </h1>
          </div>
        </div>
        <div className="app-set-two">
          <div className="right-rotate-info-fullstack">
            <a className="rotate-a" href="https://www.linkedin.com/in/sanjib-santra-7b7040249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              Full Stack Developer
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
