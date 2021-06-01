import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Navbar, Nav } from 'react-bootstrap';




const CustomNavbar = () =>{

    return (
        <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/gamepad.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Ceng Store
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
        </Nav>
      </Navbar>
    )

}



export default CustomNavbar