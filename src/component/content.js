import React, { useState, useEffect } from 'react'
import { Users } from './Users';
import './css/content.css';
import Design from './design';

function Content() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('hemantgovekar');

    useEffect(() => {
        getData();
    }, [query])


    const getData = async () => {
        const url = `https://api.github.com/search/users?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUsers(data.items);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="container" >
            <div className="col">
                <form className="search-form" onSubmit={getSearch}>
                    <div className="input-group style-block" >
                        <input className="form-control" type="text" value={search} onChange={updateSearch} placeholder="Search by name" />
                        <span className="input-group-addon"></span>
                        {/* <button className="form-control btn btn-primary" type="submit" > Search </button> */}
                    </div>
                </form>

                <div className="row style-block" >
                    {users.map(user => (
                        <div style={{ display: "flex" }} >
                            <Design key={user.id} login={user.login} avatarUrl={user.avatar_url}></Design>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Content
