import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className='bg-primary text-light mb-4 py-3 flex-row align-center'>
            <div className='container flex-row justify-space-between-lg justify-center align-center'>
            <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Home</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getUser().data.username}
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> 
        <div>
          <Link className="text-light" to="/contact">
            <h1 className="m-0">Contact</h1>
          </Link>
        </div>
        <div>
          <Link className="text-light" to="/services">
            <h1 className="m-0">Services</h1>
          </Link>
        </div>
        <div>
          <Link className="text-light" to="/casestudies">
            <h1 className="m-0">Casestudies</h1>
          </Link>
        </div>
            </div>
        </header>
    )
}

