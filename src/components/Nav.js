import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

const Nav = (props) => {
  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="#home">Onias Israel</a>}
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      className="black"
    >
      <NavItem href="#about">
        About
      </NavItem>
      <NavItem href="#projects">
        Projects
      </NavItem>
      <NavItem href="#contact">
        Contact
      </NavItem>
    </Navbar>
  )
};

export default Nav;