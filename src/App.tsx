import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
