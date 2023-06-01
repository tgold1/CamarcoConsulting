import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='bg-black text-light mb-4 py-3 flex-row align-center'>
      {/* <div className='container flex-row justify-space-between-lg justify-center align-center'> */}
      <div className='container row' style={{margin: 'auto'}}>

        <div className='col-2'>
          <img src={logo} alt='logo graphic Camarco Consulting Innovating Solutions' style={{maxWidth:'200px'}} />
        </div>

        <div className='col-10'>

          <div className='flex-row d-flex justify-content-end'>
            <div >
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
          </div>

          <div className='row mx-auto text-center font-weight-bold custom-text' style={{width:'200px'}}><h1>Camarco</h1></div>

          <div className='row'>
            <div className='col border-right w-10 p-3'>
              <Link className="text-light" to="/">
                <h2 className="m-0">Home</h2>
              </Link>
            </div>
            <div className='col  border-right w-10 p-3'>
              <Link className="text-light" to="/contact">
                <h2 className="m-0">Contact</h2>
              </Link>
            </div>
            <div className='col border-right w-25 p-3'>
              <Link className="text-light" to="/services">
                <h2 className="m-0">Services</h2>
              </Link>
            </div>
            <div className='col w-25 p-3'>
              <Link className="text-light" to="/casestudies">
                <h2 className="m-0">Casestudies</h2>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;