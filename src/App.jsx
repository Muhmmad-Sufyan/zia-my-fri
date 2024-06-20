
import RecentCom from "./components/RecentCom";
import Team from "./components/Team";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
 
  return (
    <>
 <Header />
    {/* Hero Section */}
   <Hero />

    {/* Introdection */}
    <div className="flex flex-col md:flex-row bg-white gap-x-4 md:my-10 my-2 md:max-w-[80%] w-[90%] mx-auto  overflow-hidden">
      <div className="relative w-full md:w-1/2 h-64">
        <video  controls
          className="w-full h-full"
          poster="/eg.png"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
            <source src="https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4" 
          />
        </video>
      </div>
      <div className=" flex-1 md:mt-0 mt-4">
        <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Create Your Own Online Course</p>
        <h2 className="text-xl font-bold mb-1">Course Introduction</h2>
        <p className="text-gray-700 mb-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised..
        </p>
        <div className="flex items-center mb-1">
          <img 
            className="w-10 h-10 rounded-full mr-3"
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Author" 
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Amanda Ergony</p>
            <p className="text-gray-600">2 Months</p>
          </div>
        </div>
        <button className="md:w-[30%] w-full bg-blue-500 text-white py-2 px-4 mt-2  hover:bg-blue-600 transition duration-300">
          Start Here
        </button>
      </div>
    </div>
    {/* Recent Courses */}
    <RecentCom title='Courses' />
    {/* Our Services */}
    <Team title="Our Services" de={true}/>
    {/* Recent Post */}
    <RecentCom title='Post'/>
    {/* Our Pro Teacher */}
    <Team  title="Our Pro Teacher" de={false}/>
    <TopNavbar />
    </>
    
    
  )
}

export default App
