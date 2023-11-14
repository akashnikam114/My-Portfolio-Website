import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.screenY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActive] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <i class="uil uil-blogger"></i>&nbsp; Akash
        </a>

        <div className={Toggle ? "nav__menu- show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i class="uil uil-file-landscape"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i class="uil uil-graduation-cap"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#hobbies" className="nav__link">
                <i class="uil uil-tennis-ball"></i> Hobbies
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          {/* <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i> */}
        </div>

        {/* <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div> */}
      </nav>
    </header>
  );
};

export default Header;
