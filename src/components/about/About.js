import React from "react";
import "./About.css";
import profile from "../images/IMG4001.jpeg";

function About() {
  return (
    <div className="about">
      <div className="title">
        <h2>
          <strong>My Story</strong>
        </h2>
      </div>

      <hr />

      <div className="about__section">
        <div className="about__image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about__details">
          <div className="section__title">
            <h3>Aspirations</h3>
          </div>
          <p>
          I am a certified full-stack web developer from the Univeristy of
          Washington. I have a passion for frontend development and constantly
          strive to provide the user with the best experience possible. I
          actively challenge my technical skills with various projects and
          courses. I hope to continue my passion and to join a company that
          not only values social impact, but takes the time to develop its
          employees.
          </p>
          <div className="section__title">
            <h3>Before Tech</h3>
          </div>
          <p>
            I served as an infantryman in the Army from 2015 - 2017. I was
            released from active duty in order to complete my undergraduate
            degree and commission as an officer. In 2020, I graduated with a
            B.S. in Psychology from Washington State University and commissioned
            into the Washington Army National Guard as a Military Intelligence
            officer.
          </p>
          <p>TS/SCI Pending adjudication.</p>
          <br />
          <div className="portfolio__link">
            <a href="/portfolio">
              <button className="portfolio__button">
                PORTFOLIO
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
