import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { ArrowUpward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import SocialIcons from "../socialIcons/SocialIcons";

const Home = () => {
  const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home">
        <div>
          <h3>
            Hi there{" "}
            <motion.div
              className="hand"
              animate={{ rotate: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                from: 1,
                duration: 1,
                ease: "easeInOut",
                type: "tween",
              }}
            >
              👋
            </motion.div>
          </h3>

          <h3>I'm Marcin Łuba</h3>
          <h3>Junior React Developer</h3>
        </div>
        <img
          src="https://s.yimg.com/ny/api/res/1.2/6qMJ83mGqwEKCatiC1wLBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDk-/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2"
          alt="2"
        />
      </div>
      <div className="connect">
        <div className="shortinfo">
          <div className="shortinfo-text">
            <h3>LET ME INTRODUCE MYSELF</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libedddro vitae erat. Aenean faucibus nibh et justo cursus id
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div>
            <img
              src="https://s.yimg.com/ny/api/res/1.2/6qMJ83mGqwEKCatiC1wLBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDk-/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2"
              alt="6"
            />
          </div>
        </div>
        <h3>Feel free to Contact me!</h3>
       <SocialIcons/>
        <div>
          <p>Spotify plugin</p>
        </div>
        <div>
          <IconButton onClick={scrollUpHandler} fontSize="medium">
            <ArrowUpward />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Home;
