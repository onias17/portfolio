import React from 'react';
import { Button } from 'react-materialize';

const About = (props) => {
  return (
    <div className="container" id="about">
      <div className="header center">
        <a href="#projects" className="white-text">Projects</a> | <a href="#contact" className="white-text">Contact</a>  
      </div>
      <div id="info">
        <h3>ONIAS ISRAEL</h3>
        <h6>I am a Software Developer with a Math and Spanish background</h6>
        <p>
          <Button 
            href="https://docs.google.com/document/d/1RMoQyviGUtHkcGNmxJ1IUT_2idiGcJb8suBvRdZIZHQ/edit"
            target="_blank"
            node="a"
            waves="light"
            className="resume-btn"
          >
            Resume
          </Button>  
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default About;