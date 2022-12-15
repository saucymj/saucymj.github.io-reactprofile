
import React from "react";
import { Github, Linkedin, Slack } from "react-bootstrap-icons";

function Footer() {
   const footerStyle = {
        fontSize: '70px',
        
    }
  return (
    <footer className="footer" style={footerStyle}>
      <div className="d-flex justify-content-center">
      <a style={{ padding: '15px', color: '#22333b' }} href="https://github.com/saucymj?tab=repositories"><Github></Github></a>
    <a style={{ padding: '15px', color: '#22333b' }} href="https://acmeorg.enterprise.slack.com/user/@U03P5EZMCKW"><Slack></Slack></a>
     <a style={{ padding: '15px', color: '#22333b' }} href="https://www.linkedin.com/in/mekhi-banks-092592254/"><Linkedin></Linkedin></a>
      </div>
    </footer>
  );
}

export default Footer;