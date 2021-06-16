import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wraper">
        <div className="main-info">
            <Typed
              className="typed-text"
              strings={["Web Development  ", "Frontend Design  ", "Web Design  "]}
              typeSpeed={35}
              backSpeed={60}
              loop
              />
        </div>
      </div>
    )
}

export default Header
