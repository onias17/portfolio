import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

const Nav = (props) => {
  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="">Onias Israel</a>}
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
    >
      <NavItem href="">
        About
      </NavItem>
      <NavItem href="">
        Projects
      </NavItem>
      <NavItem href="">
        Contact
      </NavItem>
    </Navbar>
  )
};

export default Nav;