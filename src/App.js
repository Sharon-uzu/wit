import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import DashboardHomepage from './Dashboard/Screen/DashboardHomepage';
import Products from './Dashboard/Screen/Products';
import Settings from './Dashboard/Screen/Settings';




function App() {
  return (
    <div className="App">
      
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/dashboard" element={<DashboardHomepage/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/settings" element={<Settings/>} />

    </Routes>
      
    </div>
  );
}

export default App;
