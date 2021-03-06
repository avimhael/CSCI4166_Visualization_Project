import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {

    return (
        <header>
            <Navbar style={{backgroundColor: '#005bbb'}} variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Maritime Quakes</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/faq">
                            <Nav.Link><i className='fas fa-question px-1'></i>FAQ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/map">
                            <Nav.Link><i className='fas fa-shopping-cart px-1'></i>Map</Nav.Link>
                        </LinkContainer>      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header