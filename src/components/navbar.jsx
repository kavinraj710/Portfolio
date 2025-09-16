import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const menuItems = [
    { id: "home", icon: <FaHome /> },
    { id: "about", icon: <FaUserAlt /> },
    { id: "work", icon: <FaBriefcase /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  const radius = 120;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <div className="menu-container top-right" ref={menuRef}>
      <button
        type="button"
        className={`menu-btn cosmic ${isOpen ? "open" : ""}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="circular-menu" aria-hidden={!isOpen}>
        {menuItems.map((item, i) => {
          const total = Math.max(menuItems.length - 1, 1);
          const angle = (i / total) * (Math.PI / 2); // quarter-circle arc
          const x = -Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const style = {
            transform: isOpen
              ? `translate(${x}px, ${y}px) scale(1)`
              : `translate(0px, 0px) scale(0.85)`,
            transitionDelay: `${isOpen ? i * 60 : (menuItems.length - i) * 40}ms`,
            pointerEvents: isOpen ? "auto" : "none",
          };

          return (
            <li
  key={item.id}
  className={isOpen ? "show" : ""}
  style={style}
>
  <a
    href={`#${item.id}`}
    onClick={(e) => scrollToSection(e, `#${item.id}`)}
    aria-label={item.id}
  >
    {item.icon}
  </a>
</li>

          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
