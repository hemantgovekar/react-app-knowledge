import React, { useState } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Navigation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory();

    function submitForm(e) {
        e.preventDefault();
        handleClose();
        return history.push('/gitsearch');
    }

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
                <Button variant="outline-info" onClick={handleShow}>Login</Button>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login </Modal.Title>
                </Modal.Header>
                <Modal.Body className="container">
                    <form onSubmit={submitForm}>
                        <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username"
                                    aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="password" placeholder="Password" className="form-control"
                                    aria-label="Password" aria-describedby="basic-addon1"></input>
                            </div>
                            <input type="submit" value="Login"
                                className="btn btn-success form-control"  ></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
