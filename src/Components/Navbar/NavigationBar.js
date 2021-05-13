import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const navbar = { backgroundColor: "#f2a154" };

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" style={navbar} variant="dark">
        <Link to={"/"} className="navbar-brand">
          RestaurantPocket
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"Home"} className="nav-link">
              Home
            </Link>
            <Link to={"Qr"} className="nav-link">
              Qr
            </Link>
            <Link to={"Bilan"} className="nav-link">
              Bilan
            </Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
