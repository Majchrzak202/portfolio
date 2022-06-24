import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <h3>
            Hi there ^^ <br />
            I'm Marcin Łuba
          </h3>
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
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div>
            <img
              src="https://s.yimg.com/ny/api/res/1.2/6qMJ83mGqwEKCatiC1wLBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDk-/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2"
              alt="6"
            />
          </div>
          
        </div>
        <div>
            <h5>Feel free to contact me</h5>
            <p>COnect with me </p>
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
    </>
  );
};

export default Home;
