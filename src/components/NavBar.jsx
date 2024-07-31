import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Kumanime</Link>
        <div>
          <Link to="/" className="mx-2 hover:text-gray-400">Home</Link>
          <Link to="/user" className="mx-2 hover:text-gray-400">User</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
