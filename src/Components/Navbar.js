import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {
            props.about?    
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li> : ""
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
    title:"Your Title Here...",
    about: true
}

Navbar.propTypes={
    title: PropTypes.string,
    about: PropTypes.bool
}
