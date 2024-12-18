import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    supplierOrRetailer: "supplier",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
      <div className=" p-8 rounded-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-900 m-10">
          Call Us or Fill the Form

        </h1>
        <p className="text-center text-gray-600">
          Get in touch with us easily. Whether you have questions, feedback, or
          inquiries, we're here to assist you.
        </p>
        <p className="text-center text-gray-600 mb-10">
        Contact our team through the provided methods, and we'll respond promptly
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div className="space-y-4 text-blue-900">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l1.89 5.66a1 1 0 00.95.69h10.32a1 1 0 00.95-.69L21 10M4 10l-.894 1.788A1 1 0 003 13v4h18v-4a1 1 0 00-.894-1.788L20 10M5 10h14M4 6h16l.89 4.67a1 1 0 01-.95 1.33H4.06a1 1 0 01-.95-1.33L4 6z"
                />
              </svg>
              <span>+968 1234 5678</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3v6a2 2 0 002 2h2l2 2v-2h10a2 2 0 002-2V3M3 10h10"
                />
              </svg>
              <span>Mon - Fri: 9:00 - 19:00</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8h18v13H3V8zM7 12h.01M7 16h.01M10 16h4M10 12h4M17 12h.01M17 16h.01"
                />
              </svg>
              <span>123 Main Street, Muscat, Oman</span>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="supplierOrRetailer"
                    value="supplier"
                    checked={formData.supplierOrRetailer === "supplier"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  I am a Supplier
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="supplierOrRetailer"
                    value="retailer"
                    checked={formData.supplierOrRetailer === "retailer"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  I am a Retailer
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
