import React from 'react';
import { Button } from 'react-materialize';

const Contact = (props) => {
  return (
    <div className="container center" id="contact">
      <h1>Contact</h1>
      <div className="">
        <Button
          href="https://www.linkedin.com/in/onias-israel/"
          target="_blank"
          node="a"
          waves="light"
          className="social-btns linkedin"
        >
          <i className="fa fa-linkedin fa-fw"></i>
        </Button>
        <Button
          href="https://github.com/onias17"
          target="_blank"
          node="a"
          waves="light"
          className="social-btns github"
        >
          <i className="fa fa-github fa-fw"></i>
        </Button>
        <Button
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
          target="_blank"
          node="a"
          waves="light"
          className="social-btn google"
        >
          <i className="fa fa-google fa-fw"></i>
        </Button>
      </div>
    </div>
  );
};

export default Contact;