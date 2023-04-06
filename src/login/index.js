import React from 'react';
import '../vendors/bootstrap.min.css'; 
import TrackStarLogo from '../trackstar-header/trackstar-logo';

function Login() {
  return (
    <>
    <TrackStarLogo/>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <div className="p-4 bg-dark rounded shadow-sm">
        <div className="text-center mb-4">
          <h1 className="mt-2">Login</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="text-muted small">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
        
          <div className="form-group mt-2">
            <label htmlFor="password" className="text-muted small">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>

          <div className="form-group form-check mt-2">
            <input type="checkbox" className="form-check-input" id="remember-me" />
            <label className="form-check-label" htmlFor="remember-me">Remember me</label>
          </div>


          <button type="submit" className="btn btn-success  mt-2 btn-block">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;