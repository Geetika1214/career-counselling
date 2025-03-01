import { Link } from "react-router-dom";
import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 px-6 flex justify-between items-center z-50 shadow-md">
      <Link to ="/">
        <h1 className="text-xl font-bold">Tech Trek</h1>
      </Link>
      <div className="space-x-6">
      <Link to="/explore" className="hover:text-yellow-400 transition">Explore</Link>
      </div>
      <div className="space-x-8">
        <Link to="/signup" className="hover:text-yellow-400 transition">Sign Up</Link>
        <Link to="/signin" className="hover:text-yellow-400 transition">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
