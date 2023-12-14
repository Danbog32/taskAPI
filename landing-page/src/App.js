// src/App.js

import React from 'react';
import './App.css'; // You can create this file for styling
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
