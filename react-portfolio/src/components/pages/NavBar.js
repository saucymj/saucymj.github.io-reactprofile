import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          style={{color: '#c2fcf7'}}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#porfolio"
          onClick={() => handlePageChange('Portfolio')}
          style={{color: '#c2fcf7'}}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          style={{color: '#c2fcf7'}}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          style={{color: '#c2fcf7'}}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default NavBar;
