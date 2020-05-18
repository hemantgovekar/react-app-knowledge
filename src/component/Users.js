import React from 'react'
import './css/User.css'

import { Card, Button } from 'react-bootstrap';


export const Users = ({ login, avatarUrl }) => {

    let imageStyle = {
        height: "80px",
        width: "80px"
    }
    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" style={imageStyle} src={avatarUrl} />
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                 </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        // <div>
        //     <div className="card-group">
        //         <div className="card">
        //             <div className="card-body">
        //                 <img alt="GitHubUser" style={imageStyle} src={avatarUrl}></img>
        //                 <p className="card-title">{login}</p>
        //                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        //                 <p className="card-text"><small >Last updated 3 mins ago</small></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
