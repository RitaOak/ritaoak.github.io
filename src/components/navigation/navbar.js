import React from "react";
import { RiMessage2Line } from "react-icons/ri";

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
            <a class="navbar-item nav-cel">case studies</a>
            <a class="navbar-item nav-cel">about me</a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted contact-button">
                <span class="icon">
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
