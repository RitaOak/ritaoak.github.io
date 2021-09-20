import React from "react";
import { RiMessage2Line } from "react-icons/ri";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item nav-cel">case studies</a>
            <a className="navbar-item nav-cel">about me</a>
            <span className="navbar-item">
              <a className="button is-primary is-inverted contact-button">
                <span className="icon">
                  <RiMessage2Line />
                </span>
                <span>let's talk</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
