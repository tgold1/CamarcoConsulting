import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Auth from '../../utils/auth';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='bg-black text-light mb-4 py-3 d-flex flex-row align-center justify-content-end'>
      {/* <div className='container flex-row justify-space-between-lg justify-center align-center'> */}
      <div className='container row' style={{ margin: 'auto' }}>

        <div className='col-2 -end xs={12} sm={10}'>
          <img src={logo} alt='logo graphic Camarco Consulting Innovating Solutions' style={{ maxWidth: '200px' }} />
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

          <div className='row mx-auto' style={{ width: '400px' }}><h1 className='display-1 text-center' style={{ height: '100px' }}>Camarco</h1></div>
          <Container>
            <Row className="mx-auto" style={{ maxWidth: '900px' }}>
              <Col xs={6} sm={3} className="p-3 border-right">
                <Link className="text-light" to="/">
                  <h2 className="m-0 text-center">Home</h2>
                </Link>
              </Col>
              <Col xs={6} sm={3} className="p-3 border-right">
                <Link className="text-light" to="/contact">
                  <h2 className="m-0 text-center">Contact</h2>
                </Link>
              </Col>
              <Col xs={6} sm={3} className="p-3 border-right">
                <Link className="text-light" to="/services">
                  <h2 className="m-0 text-center">Services</h2>
                </Link>
              </Col>
              <Col xs={6} sm={3} className="p-3">
                <Link className="text-light" to="/casestudies">
                  <h2 className="m-0 text-center">Case Studies</h2>
                </Link>
              </Col>
            </Row>
          </Container>
          {/* <div className='row mx-auto'style={{width:'900px'}}>
            <div className='col w-25 p-3 border-right'>
              <Link className="text-light" to="/">
                <h2 className="m-0 text-center">Home</h2>
              </Link>
            </div>
            <div className='col w-25 p-3 border-right  justify-space-between-small'>
              <Link className="text-light" to="/contact">
                <h2 className="m-0 text-center">Contact</h2>
              </Link>
            </div>
            <div className='col w-25 p-3 border-right justify-space-between-small'>
              <Link className="text-light" to="/services">
                <h2 className="m-0 text-center">Services</h2>
              </Link>
            </div>
            <div className='col w-25 p-3'>
              <Link className="text-light" to="/casestudies">
                <h2 className="m-0 text-center">Case Studies</h2>
              </Link>
            </div>
          </div> */}

        </div>

      </div>
    </header>
  )
}

export default Header;