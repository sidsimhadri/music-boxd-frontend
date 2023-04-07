import '../vendors/bootstrap.min.css';
import TrackStarLogo from '../trackstar-header/trackstar-logo';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserThunk } from '../services/thunks';

function SignUp() {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setUserData({
           // ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: userData.email,
            id: Date.now().toString(),
            followers: 0,
            following: 0,
            role: 'general',
           // ...userData
        }
        dispatch(createUserThunk(newUser));
    };

    return (
        <div>
            <TrackStarLogo />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={handleInputChange} />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={handleInputChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleInputChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={handleInputChange} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
