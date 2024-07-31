import React from 'react';
import { Link } from 'react-router-dom';

const NavBottom = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around p-2">
      <Link to="/" className="flex-1 text-center hover:bg-gray-700">Home</Link>
      <Link to="/user" className="flex-1 text-center hover:bg-gray-700">User</Link>
    </nav>
  );
};

export default NavBottom;
