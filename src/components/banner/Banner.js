import React from "react";
import "./Banner.css";
import banner from '../images/IMG_banner.jpeg';

function Banner(props) {
  return (
    <div>
      <div
        className="Banner__main"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="Banner__content">
          <h1 className="Banner__title">
            Aloha.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;