import React from 'react'
import worker from '../assets/worker.jpeg'

const Solutions = () => {
  return (
    <section className="bg-blue-900 py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-white relative z-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            We Give You Complete <br className="hidden md:block" /> Control Of
            Your Distribution.
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-6 md:mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Warehouse Solutions
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use a hub and spoke distribution platform covering Oman with
                our Head Office and main stores located in Muscat.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                READ MORE
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Logistics Solutions
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use a hub and spoke distribution platform covering Oman with
                our Head Office and main stores located in Muscat.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <img
            src={worker}
            alt="Worker"
            className="h-full md:h-full w-full "
            class="scale-x-[-1]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Solutions
