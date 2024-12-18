import React from 'react'
import freshlyFoods from '../assets/brands/freshly-foods.png'
import watties from '../assets/brands/watties.png'
import lutosa from '../assets/brands/lutosa.jpg'
import happyCow from '../assets/brands/happy-cow.png'
import sutas from '../assets/brands/sutas.jpg'
import fonterra from '../assets/brands/fonterra.jpg'
import unilever from '../assets/brands/unilever.png'
import leprino from '../assets/brands/leprino.jpg'
import gourmet from '../assets/brands/gourmet-foods.png'
import minstrel from '../assets/brands/minstrel.png'
import compagna from '../assets/brands/compagna.png'
import maestro from '../assets/brands/maestro-foods.jpg'
import olam from '../assets/brands/olam.png'

const Brands = () => {
  return (
    <section class="bg-white py-16 flex items-center justify-center">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Our Brands</h2>
        <p class="text-lg text-gray-600 mb-12">
          Our way forward strategy is to work with more international brands and
          leverage our sales expertise and marketing skills in the market for
          the development of the brand & gain market share. Below are some of
          our brand partners in the Retail & Foodservices sectors.
        </p>
        <div class="grid grid-cols-3 sm:grid-cols-5 gap-6">
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={freshlyFoods} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={watties} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={lutosa} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={happyCow} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={sutas} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={fonterra} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={unilever} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={leprino} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={gourmet} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={minstrel} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={compagna} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={maestro} width={100} height={100} />
          </div>
          <div class="border border-gray-300 flex items-center justify-center p-3">
            <img src={olam} width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
