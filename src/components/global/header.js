import React, { Component } from 'react'
import config from '../../config';

export default class NavigationBar extends Component {
  render() {
    return (
      <nav class="nav bd-grid">
        <div><a class="nav__logo" href="/#">{config.appname}</a></div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item"><a class="nav__link active" href="#home">Home</a></li>
            {/* <li class="nav__item"><a class="nav__link" href="#about">About</a></li> */}
            <li class="nav__item"><a class="nav__link" href="#skills">Skills</a></li>
            <li class="nav__item"><a class="nav__link" href="#work">Work</a></li>
          </ul>
        </div>
        <div class="nav__toggle" id="nav-toggle"><i class="bx bx-menu"></i></div>
      </nav>
    );
  }
}