import React, { useState } from 'react'
import Hero from "./Hero"
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [selected, setSelected] = useState('Home')

  const handleSelect = (item) => {
    setSelected(item)
  }
  return (
    <div>
      <nav className="bg-white  p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={Logo} width={100} height={100} />
          </div>
          <ul className="flex space-x-6 mr-10 text-gray-500 text-base">
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
            <button class=" text-sky-400 font-bold border-solid border-2 border-sky-400">
              REQUEST A QUOTE
            </button>
          </ul>
        </div>
      </nav>

      <hr class="border-gray-100 border-t-1 my-1" />

      <nav className="text-gray-500">
        <div className="container mx-auto px-4 py-2 flex">
          <ul className="flex space-x-8">
            {['Home', 'About Us', 'What We Do', 'Brands', 'News', 'Careers', 'Contact Us'].map(
              (item) => (
                <li key={item}>
                  <a
                    className={`hover:text-gray-500 ${
                      selected === item
                        ? 'font-bold border-b-2 border-blue-500'
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

      {selected === 'Home' && <Hero />}
    </div>
  )
}
export default Navbar
