import React, { useState } from 'react';
import Logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  const [selected, setSelected] = useState('Home');
  const [isOpen, setIsOpen] = useState(false); // To toggle the mobile menu

  const handleSelect = (item) => {
    setSelected(item);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" width={100} height={100} />
          </div>

          {/* Hamburger Icon (mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links (desktop) */}
          <ul className="hidden lg:flex space-x-6 text-gray-500 text-base">
            <li>
              <a href="#" className="hover:text-blue-500">
                For Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                For Retailers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Location
              </a>
            </li>
            <button className="text-sky-400 font-bold border-solid border-2 border-sky-400 px-5 py-2">
              REQUEST A QUOTE
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-gray-500">
            <li>
              <a href="#" className="hover:text-blue-500">
                For Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                For Retailers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Location
              </a>
            </li>
            <button className="text-sky-400 font-bold border-solid border-2 border-sky-400 px-5 py-2">
              REQUEST A QUOTE
            </button>
          </ul>
        )}
      </nav>

      {/* Divider */}
      <hr className="border-gray-100 border-t-1 my-1" />

      {/* Secondary Navbar (Links) */}
      <nav className="text-gray-500 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <ul className="hidden lg:flex space-x-8 text-lg">
            {['Home', 'About Us', 'What We Do', 'Brands', 'News', 'Careers', 'Contact Us'].map(
              (item) => (
                <li key={item}>
                  <a
                    className={`hover:text-gray-500 ${
                      selected === item
                        ? 'font-bold border-b-2 border-blue-500 text-gray-800'
                        : ''
                    }`}
                    onClick={() => handleSelect(item)}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu for Secondary Navbar */}
          <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-gray-500">
            {['Home', 'About Us', 'What We Do', 'Brands', 'News', 'Careers', 'Contact Us'].map(
              (item) => (
                <li key={item}>
                  <a
                    className={`hover:text-gray-500 ${
                      selected === item
                        ? 'font-bold border-b-2 border-blue-500 text-gray-800'
                        : ''
                    }`}
                    onClick={() => handleSelect(item)}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
