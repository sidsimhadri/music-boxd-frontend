// import React from 'react';
import '../vendors/bootstrap.min.css';
import TrackStarLogo from '../trackstar-header/trackstar-logo';
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import { useSelector } from "react-redux";

function LoginScreen() {
    const currentUser = useSelector((state) => {
        return state.auth.currentUser
    
      });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <>
            <TrackStarLogo />
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
                <div className="p-4 bg-dark rounded shadow-sm" style={{ width: '350px', height: '400px' }}>
                    <div className="text-center nunito text-white mb-4">
                        <h1 className="mt-2">Login</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username" className="text-muted small">Username</label>
                            <input className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"
                                type="text" value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="password" className="text-muted small">Password</label>
                            <input className="form-control" id="password" placeholder="Password" 
                                type="password" value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="remember-me" />
                            <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                        </div>
                        <Link to="/">
                            <button type="submit" className="btn btn-success  mt-2 btn-block" onClick={handleLogin}>Login</button>
                        </Link>
                        <div className="nunito mt-2">
                            <span>
                                don't have an account?
                            </span>
                            <span>&nbsp;</span>
                            <span>
                                <Link className="link-salmon" to="/signup">
                                    sign up now
                                </Link>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </>

    );
}
export default LoginScreen;