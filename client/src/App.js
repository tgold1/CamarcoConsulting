import logo from './logo.svg';
import './App.css';
import './index.css';
// import MyCarousel from './MyCarousel';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink, 
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Casestudies from './pages/Casestudies';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <MyCarousel />
//     </div>
//   );
// };

// export default App;



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex start min-100-vh'>
          <Header />
          {/* <MyCarousel /> */}
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                 path='/login'
                 element={<Login />}
              />
              <Route
                 path='/signup'
                 element={<Signup />}
              />
              <Route
                 path='/contact'
                 element={<Contact />}
              />
              <Route
                 path='/casestudies'
                 element={<Casestudies />}
              />
              <Route
                 path='/services'
                 element={<Services />}
              />

            </Routes>
          </div>
          <Footer />
          </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
