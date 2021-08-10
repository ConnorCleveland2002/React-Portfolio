import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
                <a
                    href="#Homepage"
                    onClick={() => handlePageChange('Homepage')}
                    className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
          </li>
          <li className="nav-item">
                <a
                    href="#Works"
                    onClick={() => handlePageChange('Works')}
                    className={currentPage === 'Works' ? 'nav-link-active' : 'nav-link'}
                >Works</a>
          </li>
          <li className="nav-item">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-links-active' : 'nav-links'}
                >Contact Me</a>
          </li>
          <li className="nav-item">
                <a
                    href="https://drive.google.com/file/d/1fK0Ncx9_9aGoPw9GkpHQLgvZgqO6e_Kd/view?usp=sharing"
                >Resume</a>
          </li>
        </ul>
    );
}

export default NavTabs;