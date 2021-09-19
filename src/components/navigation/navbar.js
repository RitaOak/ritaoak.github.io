import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../../imgs/logo/logo-white.svg";

const navbar = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">case studies</a>
            <a class="navbar-item">about me</a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <FaGithub />
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
