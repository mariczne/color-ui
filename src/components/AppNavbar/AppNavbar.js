import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNavbar extends Component {
  render() {
    return (
      <Navbar color="faded" light>
        <NavbarBrand href="/">color-ui</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/">
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavbar;
