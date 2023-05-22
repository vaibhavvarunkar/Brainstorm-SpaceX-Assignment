import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css"
import {  NavLink } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <Navbar className='navbar-container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to={"/"}><Navbar.Brand className='brand-name'>SpaceX Insider</Navbar.Brand></NavLink>
            </Container>
        </Navbar>
    );
}

export default NavbarComp