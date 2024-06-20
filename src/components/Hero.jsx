import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[40vh] md:h-[80vh]" style={{ backgroundImage: `url('/h.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-center">20,000+ COMMUNITY MEMBERS</h1>
        <p className="text-white text-sm md:text-lg mb-4 text-center">WELCOME TO THE TEACHME COMMUNITY PAGES</p>
        <div className="w-full max-w-md flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="px-4 py-2 w-full md:mr-2 mb-2 md:mb-0 text-gray-700 rounded md:rounded-r-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded md:rounded-l-none w-full md:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
