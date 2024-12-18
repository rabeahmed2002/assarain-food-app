import React from 'react'
import warehouseImage from '../assets/warehouse.jpeg' // Replace with your actual image path

const DistributionSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={warehouseImage}
          alt="Warehouse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 flex items-center h-full">
        <div className="bg-white w-full sm:w-2/3 md:w-1/2 lg:w-[35%] p-16 px-10 shadow-lg ml-16">
          {/* Company Title */}
          <h3 className="text-blue-600 text-lg font-medium mb-2">
            Assarain Food Products L.L.C.
          </h3>
          {/* Main Heading */}
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold leading-tight mb-4">
            Oman Best Food Distributor <br />
            Natural, Organic, Specialty, <br />
            And Fresh.
          </h2>

          {/* Button */}
          <button className="bg-blue-600 text-white font-medium py-2 px-6 hover:bg-blue-700 transition duration-300">
            REQUEST A QUOTE
          </button>
          <div className="absolute right-10 bottom-10 bg-blue-600 bg-opacity-90 text-white px-6 py-4 flex items-center space-x-4 rounded-md shadow-lg">
          
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-11.793a.5.5 0 01.793-.407l4 2.5a.5.5 0 010 .85l-4 2.5A.5.5 0 018 11.5V8.207z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-light leading-tight">
                Video of a Warehouse
              </p>
              <p className="text-sm font-light">
                How Our Distribution Process Works.
              </p>
              <a
                href="#"
                className="text-blue-200 text-xs hover:text-white underline mt-1 inline-block"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DistributionSection
