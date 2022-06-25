import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <nav className="navbar">
      <img className="brand" alt="1" />
      <button onClick={() => {
        setNavExpanded(!navExpanded)
      }} className="hamburger">
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
      <div className={ navExpanded ? 'nav-menu expanded' : 'nav-menu'}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>
            <button>*</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;