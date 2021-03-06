import React from "react";
import logo from "./logo.png";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg">
      <div className="container">
          <a className="navbar-brand"><img className="logo" src={logo} alt="logo..."/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                 <Link to="/About">About</Link> 
              </li>
              <li className="nav-item active">
                 <Link to="/Portfolio">Work</Link> 
              </li>
              <li className="nav-item">
                 <Link to="/Contact">Contact</Link> 
              </li>
              <li className="nav-item">
                 <Link to="/">Home</Link> 
              </li>
            </ul>
          </div>
      </div>
    </nav>
    )
}

export default Navbar;
