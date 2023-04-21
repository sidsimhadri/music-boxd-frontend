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
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: userData.userName,
            password: userData.password,
            id: Date.now().toString(),
            followers: 0,
            following: 0,
            role: 'user',
            // ...userData
        }
        dispatch(createUserThunk(newUser));
    };

    return (
        <>
            <div className="mt-3"> <TrackStarLogo /></div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-success text-white">

                                <h2 className="card-title text-center mt-3 mb-3">Sign Up</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="firstName">First Name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="userName">Username:</label>
                                        <input
                                            type="text"
                                            name="userName"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* <Link to="/"> */}
                                            <button type="submit" className="btn btn-success btn-block">
                                                Sign Up
                                            </button>
                                        {/* </Link> */}

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default SignUp;
