import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">
            Delivered on time with no hassle.
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Copyright © 2023 - Assarain Food Products L.L.C. Design & Developed
            by Codeswave
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Keep Up To Date</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-2/3 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 font-semibold hover:bg-blue-600">
              SIGN ME UP!
            </button>
          </div>
          <div className="flex space-x-4 text-sm mt-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Site map
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
