'use client';

import { use } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="fixed-top navbar-component px-5">
            <Container fluid>
                <Navbar.Brand href="#action1">Martin Cahyadi</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavDropdown title="Links" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">Home</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action2">About Us</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action3">Cards</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action4">Services</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#contact">Contacts</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled></Nav.Link>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            >
                            </Form.Control>
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;