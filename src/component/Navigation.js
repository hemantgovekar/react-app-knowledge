import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Allstate Canada</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/gitsearch">Git Search</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
