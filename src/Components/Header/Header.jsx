import React from 'react';
import logo from '../Images/header-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const navbarStyle = {
    backgroundColor: '#4A004F',
    color: 'lavender',
  };

  const linkStyle = {
    color: 'lavender',
    fontSize: '1.25rem',
    marginLeft: '1rem',
  };

  return (
    <nav className="custom-navbar sticky-top navbar-expand-md" style={navbarStyle}>
      <div className="container">
        {/* Navbar brand/logo */}
        <Link to={''} className="nav-link" style={linkStyle}>
          <img className="img-fluid" src={logo} alt="" />
        </Link>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#customNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Centered navigation links */}
        <div className="navbar-collapse collapse" id="customNavbarContent">
          <ul className="navbar-nav">
            <li className="nav-item ms-5">
              <Link to={'home'} className="nav-link" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to={'artist'} className="nav-link" style={linkStyle}>
                Artist
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to={'about'} className="nav-link" style={linkStyle}>
                About
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to={'contact'} className="nav-link" style={linkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
