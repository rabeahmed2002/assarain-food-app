import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); 

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
            <img src={Logo} alt="Logo" className="w-24 h-auto" />
          </div>

          {/* Navigation Links (desktop) */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              For Suppliers
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              For Retailers
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              Location
            </a>
            <button className="text-sky-400 font-bold border-solid border-2 border-sky-400 px-5 py-2">
              REQUEST A DEMO
            </button>
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
                  viewBox="0 0 24 24"
                  fill="none"
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-gray-500 text-center">
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
              REQUEST A DEMO
            </button>
          </ul>
        )}
      </nav>

      {/* Divider */}
      <hr className="border-gray-100 my-1" />

      {/* Secondary Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Secondary Navbar */}
          <ul className="hidden lg:flex space-x-8 text-gray-500 text-lg">
            {[
              "Home",
              "About Us",
              "What We Do",
              "Brands",
              "News",
              "Careers",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`hover:text-blue-500 ${
                    selected === item
                      ? "font-bold border-b-2 border-blue-500 text-gray-800"
                      : ""
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Secondary Navbar */}
          {isOpen && (
            <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-gray-500 text-center">
              {[
                "Home",
                "About Us",
                "What We Do",
                "Brands",
                "News",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`hover:text-blue-500 ${
                      selected === item
                        ? "font-bold border-b-2 border-blue-500 text-gray-800"
                        : ""
                    }`}
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
