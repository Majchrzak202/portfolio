import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useTheme } from "../context/ThemeContextProvider";

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav id={theme} className="navbar">
      <img className="brand" alt="1" />
      <button
        onClick={() => {
          setNavExpanded(!navExpanded);
        }}
        className="hamburger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={navExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <ReactSwitch onChange={toggleTheme} checked={theme === "Light"} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
