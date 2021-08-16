import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wraper">
        <div className="main-info">
            <Typed
              className="typed-text"
              strings={["Frontend Design ", "Backend Development ", "Full Stack Engineer "]}
              typeSpeed={20}
              backSpeed={30}
              loop
              />
        </div>
      </div>
    )
}

export default Header
