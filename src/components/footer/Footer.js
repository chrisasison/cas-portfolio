import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from "@material-ui/core/Avatar";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <div className="about__title">
            <h4>About Me</h4>
          </div>
          <div className="about__body">
            <p>
              I am a current Military Intelligence officer in the Washington
              Army National Guard and an aspiring software engineer.
            </p>
            <p>
              I am a graduate of the University of Washington's Full-stack Web
              Development program and have a passion for creating websites and
              applications with the users experience in mind.
            </p>
          </div>
        </div>
        <div className="social__media">
          <div className="media__title">
            <h4>Social Media</h4>
          </div>
          <div className="media__body">
            <div className="media__option">
              <GitHubIcon />
              <p>My journey through software development.</p>
            </div>
            <div className="media__option">
              <FacebookIcon />
              <p>My personal facebook account.</p>
            </div>
            <div className="media__option">
              <InstagramIcon />
              <p>My life in little squares.</p>
            </div>
          </div>
        </div>
        <div className="reference">
          <div className="reference__title">
            <h4>Developer Friends</h4>
          </div>
          <div className="developers">
            <div className="developer">
              <Avatar alt="Chris M." src="https://avatars0.githubusercontent.com/u/68451200?s=460&u=f89a714253147b74f11ae3babec0dba114572521&v=4" />
            </div>
            <div className="developer">
              <Avatar alt="Sophia J." src="https://avatars0.githubusercontent.com/u/68670934?s=400&u=52eaaa56e47d1c1bb2cbf8c1af92344b4268d7be&v=4" />
            </div>
            <div className="developer">
              <Avatar alt="Jack S." src="https://avatars2.githubusercontent.com/u/44618261?s=460&u=5801347901de04f742a22ea2eb7d06dd237af565&v=4" />
            </div>
          </div>
        </div>
      </div>

      <div className="break">
        <hr />
      </div>

      <div className="footer__bottom">
        <div className="footer__tags">
          <div className="footer__tag">
            <h6>Blog</h6>
          </div>
          <div className="footer__tag">
            <h6>Edits</h6>
          </div>
          <div className="footer__tag">
            <h6>Discover</h6>
          </div>
          <div className="footer__tag">
            <h6>Payment</h6>
          </div>
          <div className="footer__tag">
            <h6>Contact</h6>
          </div>
        </div>
        <div className="copyright">
          <h6>Copyright © 2020 Chris Alexander Sison All Rights Reserved</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
