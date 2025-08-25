import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './Header/Hero'
import Home from "./Navbar/Home"
import wix from "./assets/wix.jpeg"
import second from './assets/pic2.png'
import Read from './Header/Read'
import Edit from './Header/Edit'
import first from './assets/first.avif'
import thrid from './assets/pic3.avif'
import four from './assets/pic4.avif'

export default function App() {
  const [selectedView, setSelectedView] = useState("false");

  const getViewClass = () => {
     if ( selectedView === "mobile") {
      return "w-full max-w-[250px] h-[410px] mx-auto border-0 border-white rounded-[30px] shadow-lg mt-[100px] overflow-y-scroll overflow-x-hidden bg-white z-20 relative bg-opacity-0";
     }
      return "w-full";
     };
    // switch (selectedView) {
    //   case "desktop":
    //     return "w-full"; // desktop full width
    //   case "mobile":
    //     return "w-full max-w-[250px] h-[410px] mx-auto border-0 border-white rounded-[30px] shadow-lg mt-[100px] overflow-y-scroll overflow-x-hidden bg-white z-20 relative bg-opacity-0"; 
    //   default:
    //     return "w-full";
  //   }
  // };

  return (
    <div className="relative w-full  ">
      {/* 🔹 Header */}
      <div className='h-[72px] lg:w-full flex overflow-hidden justify-around items-center shadow-md bg-white relative z-30 md:flex  md:w-full '>
        <div className="fixed top-0 left-0 w-full h-[72px] flex justify-between items-center shadow-md bg-white z-30 px-6">
         
          <Link to='/wix'>
            <img 
              src={wix} 
              alt="wix" 
              height='50px' 
              width='100px' 
              className='p-[12px] lg:mr-[260px] md:h-[50px] md:w-[100px] md:ml-6' 
            />
          </Link>

          {/* 🔹 Device Selector */}
          <div className='text-gray-400 font-light text-2xl flex flex-row'>
            <li
              id="desktop-icon"
              className='list-none p-[12px] cursor-pointer border-r-[1px] border-gray-400 '
              onClick={() => setSelectedView('desktop')}
            >
              <i className="fa-solid fa-laptop"></i>
            </li>

            <li
              id="mobile-icon"
              onClick={() => setSelectedView('mobile')}
              className='p-[12px] list-none cursor-pointer'
            >
              <i className="fa-solid fa-mobile-screen"></i>
            </li>
          </div>

          {/* 🔹 Text + Links */}
          <p className='text-[16px] font-[350] text-gray-800 xl:w-[330px] md:w-[280px]'>
            Click edit and create your own amazing website
          </p>
          <Link to='/read' className='underline font-[400] text-gray-600 xl:w-[130px] md:w-[100px]'>Read More</Link>
          <Link to='/edit' className='rounded-[30px] text-white bg-blue-500 p-[10px] w-[150px] text-center md:w-[150px] md:mr-7 lg:mr-7'>Edit this site</Link>
         
        </div>
      </div>

      {/* 🔹 Overlay only when mobile is active */}
       {selectedView === "mobile" && (
        <div className="fixed top-0 left-0 w-full h-full bg-white opacity-95 z-20 md:hidden"></div>
      )}

      {/* 🔹 Content Area */}
      <div 
        id={selectedView === "mobile" ? "mobile-view" : selectedView === "desktop" ? "desktop-view" : "default-view"} 
        className={`mx-auto border-0 ${getViewClass()} overflow-x-hidden overflow-y-scroll   md:p-0 md:w-[1200px] lg:w-[1440px] `}
      >
        {/* Navbar */}
        <div className='mb-6 w-full '>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className='flex sm:flex sm:flex-col flex-row md:flex-row justify-between items-center gap-6 lg:mt-[240px] md:mt-[240px]'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-[550] font-[Arial] leading-tight w-full md:w-2/3 '>
            Revolutionize HR with our AI-driven Platform
          </h1>
          <div className='w-full md:w-1/3 flex flex-col gap-4'>
            <p className='text-xl w-full md:m-0 sm:flex '>
              Empower Your HR Processes <br/>with Innovative Solutions
            </p>
            <button className='bg-black text-white text-[16px] rounded-[10px] px-4 py-2 w-full sm:w-auto mt-[14px] md:w-[160px] hover:bg-white hover:text-black hover:border-[1px] hover:border-black'>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='mt-6 w-full'>
          <img src={first} className='w-full h-auto object-cover ' alt="first"/>
        </div>

      
      <div className='bg-black w-full flex flex-col md:flex-row mt-20 gap-6'>
  {/* Image */}
  <img 
    src={second} 
    className='w-full md:w-[500px] lg:w-[512px] h-auto object-cover' 
    alt='second'
  />

  {/* Text Content */}
  <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6'>
    <div className='text-white font-medium text-3xl sm:text-4xl lg:text-5xl mb-4'>
      Our Journey
    </div>
    <p className='text-white text-lg sm:text-xl mb-4'>
      Where Innovation Meets HR
    </p>
    <p className='text-white text-base sm:text-[18px] leading-tight'>
      Based in Atlanta, Georgia, T. Henderson is an innovative HR platform company with a dedicated team of 25 experts. They specialize in simplifying employee management and recruitment processes. Their standout feature is an AI-driven matching system that connects employers with the best candidates, ensuring efficient hiring.
    </p>
  </div>
</div>

      <div className='mt-20 mx-4 flex flex-col md:flex-row justify-between items-start gap-10'>
  {/* Left Column */}
  <div className='w-full md:w-1/2'>
    <div className='text-black font-medium text-3xl sm:text-4xl lg:text-5xl mb-4'>
      Advantages of T. Henderson Platform
    </div>
    <p className='text-black text-base sm:text-lg mb-4'>
      Efficiency-Driven HR Management Solutions
    </p>
    <p className='text-black text-base sm:text-lg lg:text-[18px] leading-tight'>
      We provide tailored talent solutions, ensuring the perfect fit for your business while streamlining the hiring process to save time and resources. Our expert HR guidance covers compliance, payroll, and employee relations, while our employee development programs enhance workforce performance. With custom HR strategies, we address your company’s unique needs, fostering a stronger workplace culture that promotes motivation, productivity, and long-term success.
    </p>
  </div>

  {/* Right Column */}
  <div className='w-full md:w-1/2 flex flex-col gap-6'>
    <div className='text-black font-medium text-5xl sm:text-6xl'>40%</div>
    <p className='text-black text-base sm:text-lg'>Efficiency Enhancement</p>

    <div className='text-black font-medium text-5xl sm:text-6xl'>25%</div>
    <p className='text-black text-base sm:text-lg'>Accelerated Recruitment</p>

    <div className='text-black font-medium text-5xl sm:text-6xl'>50%</div>
    <p className='text-black text-base sm:text-lg'>Improved Employee Management</p>
  </div>
</div>

      <div>
        <img src={thrid} />
      </div>
     <div className='flex flex-col md:flex-row w-full bg-black text-white'>
  {/* Left Column */}
  <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8 py-8'>
    <div className='font-medium text-3xl sm:text-4xl lg:text-5xl mb-4 text-shadow-white'>
      Our Specialized Offerings
    </div>
    <p className='text-lg sm:text-xl mb-4'>Elevating HR Processes</p>
    <p className='text-base sm:text-lg leading-tight mb-6'>
      We offer tailored solutions to streamline your HR processes. From advanced recruitment tools to seamless employee management, our services are designed to enhance efficiency and drive success.
    </p>
    <button className='bg-white text-black text-base sm:text-lg rounded-[10px] px-4 py-2 w-full sm:w-auto hover:bg-black hover:text-white hover:border-[1px] hover:border-white'>
      Explore
    </button>
  </div>

  {/* Right Column */}
  <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8 py-8 flex flex-col gap-8'>
    {/* Card 1 */}
    <div className='bg-black text-white rounded-md p-4'>
      <h1 className='text-2xl sm:text-3xl font-medium flex items-center gap-2'>
        <span className='text-4xl sm:text-5xl'>✿</span> Recruitment Tools
      </h1>
      <p className='text-base sm:text-lg mt-4 leading-tight'>
        Streamline your hiring process with advanced recruitment tools designed to find the perfect candidates efficiently.
      </p>
    </div>

    {/* Card 2 */}
    <div className='bg-black text-white rounded-md p-4'>
      <h1 className='text-2xl sm:text-3xl font-medium'>Employee Management</h1>
      <p className='text-base sm:text-lg mt-4 leading-tight'>
        Simplify workforce administration with seamless employee management solutions tailored to your business.
      </p>
    </div>

    {/* Card 3 */}
    <div className='bg-black text-white rounded-md p-4'>
      <h1 className='text-2xl sm:text-3xl font-medium'>Performance Analytics</h1>
      <p className='text-base sm:text-lg mt-4 leading-tight'>
        Gain actionable insights with performance analytics that drive employee growth and business success.
      </p>
    </div>

    {/* Card 4 */}
    <div className='bg-black text-white rounded-md p-4'>
      <h1 className='text-2xl sm:text-3xl font-medium'>Customized Reporting</h1>
      <p className='text-base sm:text-lg mt-4 leading-tight'>
        Make data-driven decisions with customized reporting that provides clear, in-depth workforce analysis.
      </p>
    </div>
  </div>

      
      </div>
     <div className='bg-black text-white w-full'>
  <div className='px-4 sm:px-6 md:px-8 lg:px-20 py-10'>
    <div className='font-medium text-4xl sm:text-5xl lg:text-5xl text-shadow-white mb-4'>
      Key Features
    </div>
    <p className='text-white text-lg sm:text-xl mb-[60px]'>
      Innovative Tools for HR Management
    </p>
    <p className='text-white text-base sm:text-lg leading-tight mb-6'>
      T. Henderson's HR platform comes with a range of features that provide comprehensive control over your human resources. With real-time insights, seamless integrations, and automated alerts, managing your HR processes has never been more efficient.
    </p>
    <button className='bg-white text-black text-base sm:text-lg rounded-[7px] px-4 py-2 w-full sm:w-auto hover:bg-black hover:text-white hover:border-[1px] hover:border-white'>
      Connect
    </button>
  </div>
</div>

    <div className='bg-black w-full flex flex-col md:flex-row gap-6'>
  {/* Image */}
  <img 
    src={four} 
    className='w-full md:w-[500px] lg:w-[512px] h-auto object-cover' 
    alt='four'
  />

  {/* Text Content */}
  <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6'>
    <div className='text-white font-medium text-3xl sm:text-4xl lg:text-5xl mb-4'>
      Our Journey
    </div>
    <p className='text-white text-lg sm:text-xl mb-4'>
      Where Innovation Meets HR
    </p>
    <p className='text-white text-base sm:text-[18px] leading-tight'>
      Based in Atlanta, Georgia, T. Henderson is an innovative HR platform company with a dedicated team of 25 experts. They specialize in simplifying employee management and recruitment processes. Their standout feature is an AI-driven matching system that connects employers with the best candidates, ensuring efficient hiring.
    </p>
  </div>
</div>


</div>

      {/* 🔹 Routes */}
      <Routes>
        <Route path='/wix' element={<Hero />} />
        <Route path='/read' element={<Read />} />
        <Route path='/edit' element={<Edit />} />
        <Route path="/" element={<Home />} />
      </Routes>


    </div>
  );
}
