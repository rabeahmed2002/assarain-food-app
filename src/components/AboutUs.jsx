import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative">
            About Us
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
          </h2>{' '}
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            In acknowledgement of the basic premise that good food leads to good
            health and well-being, Assarain Food Products LLC, occupies a place
            of pride among the market leaders in the Omani industry of Fast
            Moving Consumer Goods (FMCG), founded on a reputation built over
            four decades of excellence in food products and operations. Setting
            high benchmarks for other local competitors, we are the first FMCG
            sales and distribution company to acquire ISO 22000:2005
            Certification for Food Safety Management Systems within the
            Sultanate.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 text-center">
          {/* Global Brands */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">200+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Global Brands
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>

          {/* Warehouses */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">20+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Warehouses
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>

          {/* Pallet Capacity */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">85,000+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Pallet Capacity
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>

          {/* Own Vehicles */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">300+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Own Vehicles
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>

          {/* Skilled Employees */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">1000+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Skilled Employees
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>

          {/* Omni Channel Coverage */}
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">Omni</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Channel Coverage
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use a hub and spoke distribution platform covering Oman with
              our Head Office and main stores located in Muscat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
