import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function GitSearch() {
    const [users, setUser] = useState([]);

    const getUsers = async () => {
        const randomUsers = await fetch('https://randomuser.me/api');
        const randomUsersJson = await randomUsers.json();
        console.log(randomUsersJson.results);
    }

    return (
        <Button onClick={getUsers}>Search User</Button>
        
    )
}
