import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


export default function GitSearch() {
    const [users, setUser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getUsers = async () => {
        const randomUsers = await fetch('https://randomuser.me/api');
        const randomUsersJson = await randomUsers.json();
        setUser(randomUsersJson.results);
        console.log(randomUsersJson.results);
    }

    return (
        <div className="container">
            <input type="submit" value="Get Random User" className=" btn btn-primary form-control " onClick={getUsers}></input>

            <br />
            <br />
            <br />
            <div id="result">
                {users.map(user => (
                    <div key={user.id.value} className="card">
                        <h5 className="card-header">{user.name.title} {user.name.first} {user.name.last}</h5>

                        <div className="card-body">
                            <div style={{ float: "left", width: "20%" }}>
                                <img src={user.picture.large}></img>
                            </div>
                            <div style={{ float: "right", width: "80%" }}>
                                <h3 className="card-title">Email : {user.email}</h3>
                                <h3 className="card-title">Address : {user.location.street.name}</h3>
                                <h3 className="card-title">Age : {user.dob.age}</h3>
                                <p className="card-text"></p>
                                <Button variant="primary" onClick={handleShow}>
                                    Get More Details
                                </Button>
                            </div>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{user.name.title} {user.name.first} {user.name.last}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>Phone : {user.phone}</div>
                                <div>Address : {user.location.street.name}</div>
                                <div>City : {user.location.city}</div>
                                <div>State : {user.location.state}</div>
                                <div>Country : {user.location.country}</div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button> */}
                            </Modal.Footer>
                        </Modal>
                    </div>


                ))}
            </div>
        </div>
    )
}
