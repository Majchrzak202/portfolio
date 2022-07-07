import React from "react";
import "./Footer.css";
import { useTheme } from "../context/ThemeContextProvider";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div id={theme} className="footer">
      <div className="credits">
        <p>Copyright luba.dev 2022</p>
      </div>
      <div className="socials">
        <img
          src="https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/twitter-xl.png"
          alt="2"
        />
        <img
          src="https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/twitter-xl.png"
          alt="3"
        />
        <img
          src="https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/twitter-xl.png"
          alt="4"
        />
        <img
          src="https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/twitter-xl.png"
          alt="5"
        />
      </div>
    </div>
  );
};

export default Footer;
