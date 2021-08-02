import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wraper">
        <div className="main-info">
            <Typed
              className="typed-text"
              strings={["Frontend Design ", "Backend Development ", "Full Stack Engineer "]}
              typeSpeed={25}
              backSpeed={50}
              loop
              />
        </div>
      </div>
    )
}

export default Header
