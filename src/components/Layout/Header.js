import React from 'react'
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import Roudn from '../../assets/Roudn.png'
import { LinkContainer } from 'react-router-bootstrap'
import './header.css'

export const Header = () => {
  return (
    <Navbar id="navBar" bg="" collapseOnSelect expand="md">
    <Container>
        <LinkContainer to="/">
        <Navbar.Brand>
        <img id='imgNav' src={Roudn} alt="logo" width="50px" ></img>
        </Navbar.Brand>
        </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="md-auto fw-bolder ">
        
      <LinkContainer to="/Skills">
        <Nav.Link>Skills</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/Projects">
        <Nav.Link >Projects</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/About-Me">
        <Nav.Link >About Me</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/Contact">
        <Nav.Link >Contact</Nav.Link>
      </LinkContainer>

      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
