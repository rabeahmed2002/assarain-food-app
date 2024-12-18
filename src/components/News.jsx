import React from 'react'
import person from '../assets/person.png'
import vegetables from '../assets/veg.png'
import meal from '../assets/meal.png'

const FeaturedNews = () => {
  const newsItems = [
    {
      id: 1,
      image: vegetables,
      category: 'Insights',
      title:
        'The Art of Sourcing: How We Find the Freshest Ingredients for You',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      id: 2,
      image: person,
      category: 'Insights',
      title:
        'Food Safety Matters: Our Rigorous Standards for Quality Assurance',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      id: 3,
      image: meal,
      category: 'Insights',
      title:
        'Healthy Eating Made Easy: Tips for a Balanced Diet with Our Products',
      date: 'September 20, 2023',
      link: '#',
    },
  ]

  return (
    <div className="bg-white py-20 px-5 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative">
          Featured Assarain News
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          We offer attractive prospects for fresh graduates as well as for
          experienced professionals to be part of a fast-growing, progressive
          organization. You will have the opportunity to work with our
          multinational business partners and gain the latest know-how in the
          FMCG business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className=" overflow-hidden bg-white">
            <img src={item.image} className="w-full h-48 object-cover" />
            <div className="p-5">
              <p className="text-blue-500 text-sm font-semibold mb-2">
                {item.category}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{item.date}</p>
              <a
                href={item.link}
                className="text-blue-600 font-bold hover:underline"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedNews
