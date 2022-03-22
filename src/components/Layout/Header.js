import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Roudn from '../../assets/Roudn.png'
import './header.css'
export const Header = () => {
  return (
    <Navbar id="navBar" bg="" collapseOnSelect expand="md">
    <Container>
    <Navbar.Brand href="#home">
        <img id='imgNav' src={Roudn} alt="logo" width="50px" ></img>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="md-auto fw-bolder ">
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#about-me">About Me</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
