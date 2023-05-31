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
          <Link className="text-light" to="/">
            <h1 className="m-0">Contact</h1>
          </Link>
        </div>
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Services</h1>
          </Link>
        </div>
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Casestudies</h1>
          </Link>
        </div>
            </div>
        </header>
    )
}

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Aboutme');
    
//     // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//     const renderPage = () => {
      
//       if (currentPage === 'Resume') {
//         return <Resume />;
//       }
//       if (currentPage === 'Aboutme') {
//         return <Aboutme />;
//       }
//       if (currentPage === 'Portfolio') {
//         return <Portfolio />;
//       }
//       return <Contact />;
    
//     };
//     const renderFooter = () => {
//       return Footer
//     }
  
//     const renderHeader = () => {
//       return Header
//     }
//     const handlePageChange = (page) => setCurrentPage(page);
  
//     return (
//       <div>
//         {/* We are passing the currentPage from state and the function to update it */}
//         <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//         <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//         <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
//         {/* Here we are calling the renderPage method which will return a component  */}
//         {renderPage()}{renderHeader()}
//         {renderFooter()}
//       </div>
//     );
   
//   }