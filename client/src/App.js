import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttplink, 
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Casestudies from './pages/Casestudies';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
