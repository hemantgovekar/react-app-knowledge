import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';


let displayStyle={
    // border :"1px solid red"
}

const Design = ({ login, avatarUrl }) => {
    return (
        <div className="container" style={displayStyle}>
            <div className="row">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={avatarUrl} />
                    <Card.Body>
                        <Card.Title>{login}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Design;
