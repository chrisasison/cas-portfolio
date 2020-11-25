import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/SwipeableDrawer";
import "./Nav.css";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (typeof event === "undefined") {
      return;
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`nav ${show && "nav__white"}`}>
      <div className="nav">
        <Link className="nav__logo" to="/">
          Chris Alexander
        </Link>

        <Drawer
          anchor="right"
          open={isExpanded}
          onClose={toggleDrawer("right", false)}
        >
          <div className="drawer">
            <ul className="drawer__list">
              <Link to="/" className="drawer__item">
                About
              </Link>
              <Link to="/portfolio" className="drawer__item">
                Portfolio
              </Link>
            </ul>
          </div>
        </Drawer>

        {/* <MenuIcon className="nav-hamburger" onClick={openNav}></MenuIcon> */}
        <div className="nav__right">
          <ul>
            <li className="nav__item">
              <Link className="nav-link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav-link" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
          </ul>
          <div className="nav__hamburger">
            <MenuIcon
              onClick={toggleDrawer("right", true)}
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
