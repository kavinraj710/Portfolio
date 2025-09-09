import React, { useState, useEffect } from "react";
import "./Navbar.css"; // custom styling

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-md ${
        isScrolled ? "navbar-reduce" : "navbar-trans"
      }`}
    >
      <div className="container">


        {/* Toggle Button */}
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Items */}
        <div
          className={`navbar-collapse collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link js-scroll active"
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#work"
                onClick={(e) => scrollToSection(e, "#work")}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
