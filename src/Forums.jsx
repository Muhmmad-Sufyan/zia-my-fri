import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TopNavbar from './components/TopNavbar'

const Forums = () => {
  const forums = [
    { name: "General Forums", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", posts: 332, topics: 21, imgSrc: "/Sha.png" },
    { name: "Site Feedback", description: "Lorem Ipsum is dummy text of the printing and typesetting industry.", posts: 4122, topics: 55, imgSrc: "/Sha.png" },
    { name: "Pre-Sale Questions", description: "Lorem simply dummy text of the printing and typesetting industry.", posts: 3122, topics: 65, imgSrc: "/Sha.png" },
    { name: "Item Support", description: "Lorem Ipsum is simply dummy text of the and typesetting industry.", posts: 8698, topics: 1798, imgSrc: "/Sha.png" },
    { name: "Global off topic", description: "Lorem Ipsum is simply the printing and typesetting industry.", posts: 12698, topics: 214, imgSrc: "/Sha.png" },
    { name: "How to Support the Clients", description: "Lorem sply dummy text of the printing and typesetting industry.", posts: 3122, topics: 65, imgSrc: "/Sha.png" },
    { name: "Time to Meet with Community", description: "Lorem Ipsum is simply dummy text of the ppesetting industry.", posts: 8698, topics: 1798, imgSrc: "/Sha.png" },
  ];
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-[#f4f4f7]  py-6 mb-4 ">
        <div className="max-w-4xl mx-auto flex  justify-center md:justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-left text-center">
            Community
            </h1>
            <i>
              <p className="md:text-left text-center">
              Welcome to the our community forum
              </p>
            </i>
          </div>

          <i className="md:flex hidden ">
            <a href="/" className="hover:text-blue-400">
              Home
            </a>
            /
            <a href="/forums" className="hover:text-blue-400  font-bold">
            Forums
            </a>
          </i>
        </div>
      </div>
      {/* <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>FORUMS</div>
          <div className="hidden md:block col-span-2"></div>
          <div className="text-right ">POSTS</div>
          <div className="text-right">TOPICS</div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
        {forums.map((forum, index) => (
          <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-b border-gray-200">
            <div className="flex items-center col-span-2 md:col-span-1">
              <img src={forum.imgSrc} alt={forum.name} className="w-8 h-8 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{forum.name}</p>
                <p className="text-gray-600 text-sm">{forum.description}</p>
              </div>
            </div>
          
            <div className="flex items-center justify-end">
              <p className="text-gray-600">{forum.posts.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-end">
              <p className="text-gray-600">{forum.topics.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div> */}
      {/* <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">FORUMS</div>
          <div className="hidden md:block col-span-1"></div>
          <div className="text-right">POSTS</div>
          <div className="text-right">TOPICS</div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
        {forums.map((forum, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center col-span-4 md:col-span-1">
              <img src={forum.imgSrc} alt={forum.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{forum.name}</p>
                <p className="text-gray-600 text-sm ">{forum.description}</p>
              </div>
            </div>
           
            <div className="flex items-center justify-end col-span-2 md:col-span-1">
              <p className="text-gray-600">{forum.posts.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-end col-span-2 md:col-span-1">
              <p className="text-gray-600">{forum.topics.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div> */}
    <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-white p-4 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">FORUMS</div>
          <div className="text-right col-span-1 md:block hidden">POSTS</div>
          <div className="text-right col-span-1 md:block hidden">TOPICS</div>
        </div>
      </div>
      <div className="bg-white shadow-md  overflow-hidden">
        {forums.map((forum, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-4 px-1 md:p-4 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center justify-start col-span-1">
              <img src={forum.imgSrc} alt={forum.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{forum.name}</p>
                <p className="text-gray-600 md:text-sm text-[9px] text-nowrap">Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="md:flex items-center  hidden justify-end col-span-1">
              <p className="text-gray-600 border px-2  hover:bg-gray-800 hover:text-white">{forum.posts.toLocaleString()}</p>
            </div>
            <div className="md:flex items-center hidden justify-end col-span-1">
              <p className="text-gray-600 border  px-2 hover:bg-gray-800 hover:text-white">{forum.topics.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <TopNavbar  />
      
    </div>
  )
}

export default Forums
