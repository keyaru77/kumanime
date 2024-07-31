import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KomikPage from './pages/KomikPage';
import UserPage from './pages/UserPage';
import NavBar from './components/NavBar';
import NavBottom from './components/NavBottom';
import './App.css';  // Import your CSS file here

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/komik/:id" element={<KomikPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
        <NavBottom />
      </div>
    </Router>
  );
};

export default App;
