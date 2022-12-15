import React, { useState } from 'react';
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const pageStyle = {
        backgroundColor: '#040f0f',
        padding: '17px',
        fontSize: '30px',
        color: '#c2fcf7',
    }
  
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <nav className="navbar" style={pageStyle}>
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/saucymj?tab=repositories"
            style={{ ...pageStyle, textDecoration: 'none'}}
          >
            <span className="content is-large" >Mekhi Banks</span>
          </a>
        </div>
   
      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </nav>
      <main>
        <div>{renderPage()}</div>
      </main>
    </div>
  );
}

export default Header;