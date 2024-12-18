import React from 'react'
import warehouseImage from '../assets/warehouse.jpeg'
import play from '../assets/play.png'

const DistributionSection = () => {
  return (
    <section className="relative w-full h-auto md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={warehouseImage}
          alt="Warehouse"
          className="w-full h-full object-cover scale-x-[-1]"
        />
      </div>

      <div className="relative min-h-screen md:h-screen flex justify-center md:justify-start items-center px-4 lg:pl-[5%]">
        <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] lg:w-[50%] h-auto md:h-[50%]">
          <div className="w-full bg-white p-4 md:p-8 flex flex-col justify-center mb-4 md:mb-0 md:w-[65%]">
            <h1 className="text-cyan-500 text-sm md:text-xl font-medium mb-1 md:mb-2">
              Assarain Food Products L.L.C.
            </h1>
            <h1 className="text-lg md:text-2xl font-bold leading-snug md:leading-tight mb-3 md:mb-6">
              Oman Best Food Distributor Natural, Organic, Specialty, And Fresh.
            </h1>
            <button className="bg-[#003366] text-white text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-4 w-full md:w-fit">
              REQUEST A QUOTE
            </button>
          </div>

          <div className="w-full bg-cyan-500/80 flex flex-col justify-center items-center text-white py-6 md:py-8 md:w-[35%]">
            <div className="mb-3 md:mb-4">
              <div className="w-12 md:w-20 h-12 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4 cursor-pointer">
                <img src={play} alt="Play Button" />
              </div>
            </div>
            <p className="text-center text-xs md:text-sm mb-2 leading-tight">
              Video of a Warehouse
              <br />
              How Our Distribution
              <br />
              Process Work...
            </p>
            <button className="text-sm md:text-base text-blue-900 font-bold border-b-2 border-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DistributionSection
