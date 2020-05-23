import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Allstate Canada</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/gitsearch">Random User</Nav.Link>
                    <Nav.Link href="/form">Form Example</Nav.Link>

                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}
