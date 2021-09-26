import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './UserContainer.css';

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setUsers(data.results));
    }, [])

    return (
        <div>
            <div className = "card-container container">
                {
                    users.map(user => <User 
                        user = {user} 
                        key = {user.id.name}
                        >
                        </User>)
                }
            </div>

        </div>
    );
};

export default UserContainer;
