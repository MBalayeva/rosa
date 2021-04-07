import React from 'react';
import logo from '../images/logo-rosa.png';

function Navbar({showMenu, menuToggle}) {
    return (
      <div className="container">
        <nav className="nav">
          <div className="toggle-menu" onClick={showMenu}>
            {menuToggle ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </div>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className={menuToggle ? `nav-list` : `open nav-list`}>
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Reservation
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar
