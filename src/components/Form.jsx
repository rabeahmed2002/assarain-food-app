import React, { useState } from 'react'
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const ContactForm = () => {
  const [isSupplier, setIsSupplier] = useState(true)

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-4 relative">
          Call Us or Fill the Form
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Get in touch with us easily. Whether you have questions, feedback, or
          inquiries, we’re here to assist you. Contact our team through the
          provided methods, and we'll respond promptly.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 w-full md:w-1/3">
            <div className="flex items-start">
              <FaPhone className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-blue-900 font-bold">+968 1234 5678</p>
                <p className="text-gray-600">Don’t hesitate to contact us!</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-blue-900 font-bold">Working Time</p>
                <p className="text-gray-600">
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-blue-900 font-bold">Company Headquarters</p>
                <p className="text-gray-600">123 Main Street, Muscat, Oman</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-8 ">
            <div className="flex items-center justify-start mb-4 space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="form-radio"
                  name="role"
                  checked={isSupplier}
                  onChange={() => setIsSupplier(true)}
                />
                <span>I am a Supplier</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="form-radio"
                  name="role"
                  checked={!isSupplier}
                  onChange={() => setIsSupplier(false)}
                />
                <span>I am a Retailer</span>
              </label>
            </div>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
