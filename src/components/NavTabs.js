import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#Homepage"
            onClick={() => handlePageChange("Homepage")}
            className={
              currentPage === "Homepage" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Works"
            onClick={() => handlePageChange("Works")}
            className={currentPage === "Works" ? "nav-link active" : "nav-link"}
          >
            Works
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://docs.google.com/document/d/1b-lqywC3G1ga9VfPFIMkskgNGmiBtyWq2ON8hvxVoTI/edit?usp=sharing"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>
    );
}

// Set highlighted tab

export default NavTabs;