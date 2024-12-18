import React from 'react'
import worker from '../assets/worker.jpeg'

const Solutions = () => {
  return (
    <section className="bg-blue-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-white relative z-10 flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            We Give You Complete <br /> Control Of Your Distribution.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Warehouse Solutions */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Warehouse Solutions</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-500 font-medium">
                READ MORE
              </a>
            </div>

            {/* Logistics Solutions */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Logistics Solutions</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-500 font-medium">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 absolute right-0 top-0 bottom-0">
          <img
            src={worker}
            alt="Worker"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Solutions
