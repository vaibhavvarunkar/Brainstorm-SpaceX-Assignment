import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css"
import { Link, NavLink } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <Navbar className='navbar-container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='brand-name'>SpaceX Insider</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey={"#home"} className="ml-auto">
                        <NavLink to={"/"}><Nav.Link className='links' href="#home">Home</Nav.Link></NavLink>
                        <NavLink to={"/rockets"}><Nav.Link className='links' href="#features">Rockets</Nav.Link></NavLink>
                        <NavLink to={"/rockets"}><Nav.Link className='links' href="#pricing">Capsules</Nav.Link></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp