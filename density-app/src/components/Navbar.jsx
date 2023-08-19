import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent text-gray-900 py-4 sticky top-0 z-10 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <img style={{borderRadius:"20%"}} src="https://halderpritam123.github.io/static/media/logo.5904bc079b08272c4700.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-semibold">VeloSys</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">Home</a>
          <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">About</a>
          <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">Contact</a>
          <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110">Download App</button>
        </div>
        <div
          onClick={toggleMenu}
          className="md:hidden relative"
        >
          <button className={`text-gray-900 transition transform ${menuOpen ? 'scale-110 text-black' : 'hover:text-black'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className={`absolute bg-gray-100 p-2 rounded-md shadow-md mt-2 right-0 transform transition-transform duration-500 z-20 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">About</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">Contact</a>
            <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 mt-2">Download App</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
