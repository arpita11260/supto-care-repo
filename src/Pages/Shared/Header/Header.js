import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Supto Care</Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#doctors">Doctor</Nav.Link> 
            <Nav.Link as={HashLink} to="/aboutus">About Us</Nav.Link> 
            <Nav.Link as={HashLink} to="/notfound">Contact Us</Nav.Link> 

           { user?.email ?
           <Button onClick={logOut} variant="light">Log Out</Button>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link> }

        <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
        </Navbar.Text>
        </Navbar.Collapse>       
          </Container>
        </Navbar>
       
      </>
    );
};

export default Header;