import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Navbar } from 'react-bootstrap';




const CustomNavbar = () =>{

    return (
        <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    )

}



export default CustomNavbar