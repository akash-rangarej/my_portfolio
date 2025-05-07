import { useRef, useState, useEffect } from "react";
import React from "react";
import "./Navbar.css";

function Navbar() {
  const [darkmode, setdarkmode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    nav.current.classList.add("navbar-dark-mode");
    document.body.classList.add("navbar-dark-mode");
  }, []);

  const handle_dark_mode = () => {
    setdarkmode(!darkmode);
    if (darkmode) {
      nav.current.classList.add("navbar-dark-mode");
      document.body.classList.add("navbar-dark-mode");
    } else {
      nav.current.classList.remove("navbar-dark-mode");
      document.body.classList.remove("navbar-dark-mode");
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar" ref={nav}>
      <button className="mobile-menu-button" onClick={toggleMenu}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          {isMenuOpen ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          ) : (
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          )}
        </svg>
      </button>

      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-item" onClick={() => scrollToSection("about")}>
          About
        </div>
        <div className="navbar-item" onClick={() => scrollToSection("skills")}>
          Skills
        </div>
        <div className="navbar-item" onClick={() => scrollToSection("my-work")}>
          My Work
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection("experiences")}
        >
          Experiences
        </div>
      </div>

      <button id="theme-toggle" onClick={handle_dark_mode}>
        {darkmode ? (
          <img
            src="src\assets\dark.png"
            alt="dark icon"
            className="dark-mode"
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bright-mode"
          >
            <path
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM11 0H13V4H11V0ZM11 20H13V24H11V20ZM0 11H4V13H0V11ZM20 11H24V13H20V11ZM2.63604 2.63604L4.75736 4.75736L3.34315 6.17157L1.22183 4.05025L2.63604 2.63604ZM19.2426 19.2426L21.364 21.364L19.9497 22.7782L17.8284 20.6569L19.2426 19.2426ZM17.8284 3.34315L19.9497 1.22183L21.364 2.63604L19.2426 4.75736L17.8284 3.34315ZM4.05025 19.9497L6.17157 17.8284L4.75736 16.4142L2.63604 18.5355L4.05025 19.9497Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Navbar;
