import React from "react";
import "./Footer.css";
import { useTheme } from "../context/ThemeContextProvider";
import SocialIcons from "../socialIcons/SocialIcons";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div id={theme} className="footer">
      <div className="credits">
        <p>Copyright luba.dev 2022</p>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Footer;
