import React from 'react';
import logo from '../coding.png';
import logo2 from '../developer.png';
import name from '../name.png';
import '../App.css';

export const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/><img className="name" src={name} alt="name..."/><img className="logo2" src={logo2} alt="logo2..."/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
    )
}

export default Navbar;
