import React from 'react';
import { Button } from 'react-materialize';

const About = (props) => {
  return (
    <div className="container" id="about">
      <div className="header center proj-con">
        <a href="#projects" className="white-text">Projects</a> | <a href="#contact" className="white-text">Contact</a>  
      </div>
      <div className="center" id="info">
        <h3>ONIAS ISRAEL</h3>
        <h6>I am a Full Stack Software Developer with a Math and Spanish background</h6>
        <br />
        <p>
          <Button 
            href="https://drive.google.com/file/d/10ZoNeGirDloSwZU4Fje1CFrxy6cRH5zw/view?usp=sharing"
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