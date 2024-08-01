import React from "react";
import Links from "./Links";

function Skill() {
  return (
    <>
      <section className="skill-set">
        <div className="skill-set-header" data-aos="fade-right">
          <h1><span style={{ color: "#cb413f" }} >Short</span>View</h1>
        </div>

        <div className="skill-22">
          <div className="cards-skill" data-aos="zoom-in">
            <a className="ancor-text" href="https://github.com/sanjib45">
              <div className="card-skill-img">
                <img
                  src="https://www.zellusmarketing.com/wp-content/uploads/2021/06/Rocket-Digital-Marketing-Gif-1.gif"
                  alt=""
                />
              </div>
              <div className="card-info">
                {" "}
                <h2>Web Project</h2>
                <br />
                <h6>Github Repos</h6>
              </div>


            </a>
          </div>

        </div>

        <Links />
      </section>
    </>
  );
}

export default Skill;
