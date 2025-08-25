// import React, { useState } from 'react';
import { Link, Route, Routes,useLocation  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './Header/Hero';
// import Home from "./Navbar/Home";
import Read from './Header/Read';
import Edit from './Header/Edit';

// import wix from "./assets/wix.jpeg";
import first from './assets/first.avif';
import second from './assets/pic2.png';
import thrid from './assets/pic3.avif';
import four from './assets/pic4.avif';
import five from './assets/pic5.avif'
import six from './assets/pic6.avif'
import seven from './assets/pic7.avif'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function App() {
  
  const settings = {    
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  // const [selectedView, setSelectedView] = useState("desktop");
  
  const location = useLocation(); //
    const isRouteView = ['/wix', '/read', '/edit'].includes(location.pathname);

  // 🔹 Mobile toggle class
  const getViewClass = () => {
    // if (selectedView === "mobile" ) {
    //   return "w-full max-w-md mx-auto rounded-[30px] shadow-lg mt-6 overflow-y-auto  overflow-x-hidden bg-white z-20 relative p-4 border-2 border-t-[100px] border-gray-300 lg:border-4 lg:border-t-[100px] lg:max-w-lg xl:max-w-[400px]";
    // }
    return "w-full";
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      {/* <div className='h-[72px] w-full flex justify-around items-center shadow-md bg-white fixed top-0 z-30 px-6'>
       
          <img src={wix} alt="wix" className='h-[50px] w-[100px] p-[12px] cursor-pointer' />
        

        {/* Device Selector */}
        {/* <div className='text-gray-400 font-light text-2xl flex flex-row'>
          <li
            className='list-none p-[12px] cursor-pointer border-r-[1px] border-gray-400'
            onClick={() => setSelectedView('desktop')}
          >
            <i className="fa-solid fa-laptop"></i>
          </li>

          <li
            onClick={() => setSelectedView('mobile')}
            className='list-none p-[12px] cursor-pointer'
          >
            <i className="fa-solid fa-mobile-screen"></i>
          </li>
        </div>

        <p className='text-[16px] font-[350] text-gray-800 hidden sm:block'>
          Click edit and create your own amazing website
        </p>
        <Link to='/read' className='underline font-[400] text-gray-600 hidden sm:block'>Read More</Link>
        <Link to='/edit' className='  relative z-40 rounded-[30px] text-white bg-blue-500 p-[10px] text-center sm:block'>Edit this site</Link>
      </div> */} 
        {/* <div className='text-gray-400 font-light text-2xl flex flex-row'>
          <li
            className='list-none p-[12px] cursor-pointer border-r-[1px] border-gray-400'
            onClick={() => setSelectedView('desktop')}
          >
            <i className="fa-solid fa-laptop"></i>
          </li>

          <li
            onClick={() => setSelectedView('mobile')}
            className='list-none p-[12px] cursor-pointer'
          >
            <i className="fa-solid fa-mobile-screen"></i>
          </li>
        </div> */}

      {/* Overlay for mobile */}
      {/* {selectedView === "mobile" && window.innerWidth <= 700 && (
        <div className="fixed top-0 left-0 w-full  bg-white opacity-60 z-20 md:block lg:block overflow-auto"></div>
      )} */}

      {/* Content Area */}
      {!isRouteView && ( <div
        // id={selectedView === "mobile" ? "mobile-view" : "desktop-view"}
        className={`mx-auto border-0 ${getViewClass()} mt-[72px] overflow-x-hidden overflow-y-auto overflow-visible md:p-0 w-full  max-w-screen-lg max-w-screen-xl`}
      >
        {/* Navbar */}
        <div className='mb-6 w-full'>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mt-[240px] ml-[30px] mr-[30px]'>
          <h1 className='text-4xl sm:text-7xl md:text-7xl lg:text-7xl font-[550] w-full md:w-2/3 leading-tight'>
            Revolutionize HR with our AI-driven Platform
          </h1>
          <div className='w-full md:w-1/4 flex flex-col gap-4'>
            <p className='text-xl w-full'>Empower Your HR Processes <br/>with Innovative Solutions</p>
            <button className='bg-black text-white text-[16px] rounded-[10px] px-4 py-2 w-full sm:w-[160px] mt-4 md:w-[160px] lg:w-[160px] hover:bg-white hover:text-black hover:border-[1px] hover:border-black'>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='mt-6 w-full'>
          <img src={first} className='w-full h-auto object-cover ml-[30px] mr-[30px]' alt="first" />
        </div>

        {/* Our Journey */}
        <div className='bg-black w-full flex flex-col md:flex-row mt-20 gap-6 p-4 md:p-0'>
          <img src={second} className='w-full md:w-[500px] lg:w-[512px] h-auto object-cover' alt='second' />
          <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6 lg:m-[140px]'>
            <div className='text-white font-medium text-3xl sm:text-4xl lg:text-5xl mb-4'>Our Journey</div>
            <p className='text-white text-lg sm:text-xl mb-4'>Where Innovation Meets HR</p>
            <p className='text-white text-base sm:text-[18px] leading-tight'>
              Based in Atlanta, Georgia, T. Henderson is an innovative HR platform company with a dedicated team of 25 experts. They specialize in simplifying employee management and recruitment processes. Their standout feature is an AI-driven matching system that connects employers with the best candidates, ensuring efficient hiring.
            </p>
          </div>
        </div>

        {/* Advantages */}
        <div className='mt-20 mx-4 flex lg:flex-row  md:flex-row justify-between items-start gap-10 mb-[110px]'>
          <div className='w-full md:w-1/2'>
            <div className='text-black font-medium text-3xl sm:text-4xl lg:text-5xl mb-4'>Advantages of T. Henderson Platform</div>
            <p className='text-black text-base sm:text-lg mb-4'>Efficiency-Driven HR Management Solutions</p>
            <p className='text-black text-base sm:text-lg lg:text-[18px] leading-tight mt-[90px]'>
              We provide tailored talent solutions, ensuring the perfect fit for your business while streamlining the hiring process to save time and resources. Our expert HR guidance covers compliance, payroll, and employee relations, while our employee development programs enhance workforce performance. With custom HR strategies, we address your company’s unique needs, fostering a stronger workplace culture that promotes motivation, productivity, and long-term success.
            </p>
          </div>
          <div className='w-full md:w-1/5 flex flex-col gap-6'>
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

        {/* Specialized Offerings */}
        <div className='flex lg:flex-row  sm:flex sm:flex-col md:flex-row  md:w-full md:flex text-white '>
          <div className='w-full md:w-1/2 px-4 py-8 bg-black text-white sm:px-6 md:px-8 '>
            <div className='font-medium text-3xl sm:text-4xl lg:text-5xl mb-4 text-shadow-white'>Our Specialized Offerings</div>
            <p className='text-lg sm:text-xl mb-4'>Elevating HR Processes</p>
            <p className='text-base sm:text-lg leading-tight mb-6'>
              We offer tailored solutions to streamline your HR processes. From advanced recruitment tools to seamless employee management, our services are designed to enhance efficiency and drive success.
            </p>
            <button className='bg-white text-black text-base sm:text-lg rounded-[10px] px-4 py-2 w-full sm:w-auto hover:bg-black hover:text-white hover:border-[1px] hover:border-white'>
              Explore
            </button>
          </div>
          <div className='w-full md:w-1/2 px-4 py-8 flex flex-col gap-8 sm:px-6 md:px-8'>
            {/* <div className='bg-black text-white rounded-md p-4'>
              <h1 className='text-2xl sm:text-3xl font-medium flex items-center gap-2'><span className='text-4xl sm:text-5xl'>✿</span> Recruitment Tools</h1>
              <p className='text-base sm:text-lg mt-4 leading-tight'>Streamline your hiring process efficiently.</p>
            </div> */}
            <div className='bg-black text-white rounded-md p-4'>
      <h1 className='text-2xl sm:text-3xl font-medium flex items-center gap-2'>
        <span className='text-4xl sm:text-5xl'>✿</span> Recruitment Tools
      </h1>
      <p className='text-base sm:text-lg mt-4 leading-tight'>
        Streamline your hiring process with advanced recruitment tools designed to find the perfect candidates efficiently.
      </p>
    </div>
            <div className='bg-black text-white rounded-md p-4'>
              <h1 className='text-2xl sm:text-3xl font-medium'>Employee Management</h1>
              <p className='text-base sm:text-lg mt-4 leading-tight'>Simplify workforce administration.</p>
            </div>
            <div className='bg-black text-white rounded-md p-4'>
              <h1 className='text-2xl sm:text-3xl font-medium'>Performance Analytics</h1>
              <p className='text-base sm:text-lg mt-4 leading-tight'>Gain actionable insights.</p>
            </div>
            <div className='bg-black text-white rounded-md p-4'>
              <h1 className='text-2xl sm:text-3xl font-medium'>Customized Reporting</h1>
              <p className='text-base sm:text-lg mt-4 leading-tight'>Make data-driven decisions with customized reporting that provides clear, in-depth workforce analysis.</p>
            </div>
          </div>
        </div>
         <div className='bg-black text-white w-full '>
  <div className='px-4 sm:px-6 md:px-8 lg:px-20 py-20 '>
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
  <div className='bg-black w-full flex flex-col md:flex-row gap-6'>
    {/* Image */}
    <img 
      src={four} 
      className='w-full md:w-1/2 lg:w-1/2 h-auto object-cover' 
      alt='four'
    />
  
    {/* Text Content */}
    <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6 lg:m-[40px] lg:mt-[70px]'>
            <div className='text-white font-medium text-2xl sm:text-3xl lg:text-5xl mb-4 m-[42px]'>Seamless Integrations</div>
            <p className='text-white text-[10px] sm:text-[17px] mb-4 mt-[40px] m-[40px]'>Effortlessly connect with your existing systems for a smooth and efficient workflow.</p>
            
          </div>
  </div>
  <div className='bg-black w-full lg:flex lg:flex-row md:flex-row gap-6'>
    {/* Image */}
    
  
    {/* Text Content */}
    <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6 lg:m-[40px] lg:mt-[70px]'>
            <div className='text-white font-medium text-2xl sm:text-3xl lg:text-5xl mb-4 m-[42px]'>Automated Alerts</div>
            <p className='text-white text-[10px] sm:text-[17px] mb-4 mt-[40px] m-[40px]'>Stay informed with real-time notifications that keep you ahead of important updates.</p>
            
          </div>
  
  <img 
      src={five} 
      className='w-full md:w-1/2 lg:w-1/2 h-auto object-cover' 
      alt='five'
    />
  
</div>
<div className='bg-black w-full flex flex-col md:flex-row gap-6'>
    {/* Image */}
    <img 
      src={six} 
      className='w-full md:w-1/2 lg:w-1/2 h-auto object-cover' 
      alt='six'
    />
  
    {/* Text Content */}
    <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6 lg:m-[40px] lg:mt-[70px]'>
            <div className='text-white font-medium text-2xl sm:text-3xl lg:text-5xl mb-4 m-[42px]'>Customized Configurations</div>
            <p className='text-white text-[10px] sm:text-[17px] mb-4 mt-[40px] m-[40px]'>Tailor features and settings to match your unique business needs.</p>
            
          </div>
  </div>

</div>
<div className='bg-black w-full lg:flex lg:flex-row md:flex-row gap-6'>
    {/* Image */}
    
  
    {/* Text Content */}
    <div className='flex flex-col justify-start md:mt-0 mt-6 md:ml-6 lg:m-[40px] lg:mt-[70px]'>
            <div className='text-white font-medium text-2xl sm:text-3xl lg:text-5xl mb-4 m-[42px]'>Real-Time Insights</div>
            <p className='text-white text-[10px] sm:text-[17px] mb-4 mt-[40px] m-[40px]'>Access the latest data instantly for accurate decision-making and performance tracking.</p>
            
          </div>
  
  <img 
      src={seven} 
      className='w-full md:w-1/2 lg:w-1/2 h-auto object-cover' 
      alt='seven'
    />
  
</div>

<div className='text-center m-7'>
  <div className='text-4xl sm:text-5xl md:text-7xl font-[400] my-12 sm:my-16 md:my-32'>
    Client Feedback
  </div>
  <p className='text-sm sm:text-[16px] font-[900] mb-8'>Alexa Young, HR Manager</p>
</div>

<div className='px-4 sm:px-16 md:px-36 text-center mb-12'>
  <Slider {...settings} className="">
    <div>
      <p className='text-lg sm:text-2xl md:text-3xl font-semibold '>
        "Their platform simplifies the recruitment process, helping us match with top-tier candidates quickly and efficiently."
      </p>
    </div>
    <div>
      <p className='text-lg sm:text-2xl md:text-3xl font-semibold'>
        "We were looking for a solution to improve communication within our HR department and increase employee engagement."
      </p>
    </div>
    <div>
      <p className='text-lg sm:text-2xl md:text-3xl font-semibold'>
        "T. Henderson’s innovative HR platform has transformed the way we handle employee management."
      </p>
    </div>
  </Slider>
</div>

<div className='flex flex-row justify-between items-center pb-6 mb-6 bg-black text-white '>

      <div className='lg:ml-6 '>
        <div className='pt-28 pb-28'>
          <Link to='/' className='text-xl '>T.Henderson</Link>
        </div>
        <div className='border-[1px] border-white rounded-md  w-[500px] mb-36'>
          <form className='p-[50px]'>
              <div className='font-semibold text-xl'>Contact us</div>
              <div className='flex flex-row gap-6'>
                <div className='flex flex-col gap-2.5 w-[200px] mt-4'>
                <label>First name*</label>
              <input type='text' className='border-b-[1px] border-white  mt-6'/>
              </div>
               <div className='flex flex-col gap-2.5 w-[200px] mt-4'>
                <label>Last name*</label>
              <input type='text' className='border-b-[1px] border-white   mt-6'/>
              </div>
              </div>
             <div className='flex flex-col mt-5 '>
               <label>Email*</label>
              <input type='email' className='border-b-[1px] border-white mt-6 '/>

             </div>
             <div className='flex flex-col mt-5 '>
               <label>Phone</label>
              <input type='tel' className='border-b-[1px] border-white mt-6 '/>

             </div>
             <div className='flex flex-col mt-5 '>
               <label>Message</label>
                <textarea className='border-b-[1px] border-white mt-6 ' rows={6}></textarea>

             </div>
             <div className='flex flex-col mt-5'>
              <button className='bg-white text-black hover:bg-black hover:text-white  w-[140px] rounded-md p-1.5 ' >Submit</button>
             </div>
          </form>
        </div>
      </div>
 <div className='text-white lg:mr-40'>
  <div className='w-[200px] text-lg mb-11'>
    123-456-7890
<br/>
info@mysite.com
</div>
<div className='w-[200px] text-lg mb-5 border-b-[1px] '>
    500 Terry Francine St. San<br/> Francisco, CA 94158
    <div className='border-b-[1px] mt-4'>
      </div>
</div>
<div className='w-[200px] text-lg mb-5 border-b-[1px] '>
    <a href='#'>Privacy Policy <br/> Accessiblity Statement</a>
    <div className='border-b-[1px] mt-4'>
      </div>
</div>
<div className='w-[250px] text-lg mb-5 border-b-[1px] '>
    <a href='#'>@2035 by T.Henderson <br/> Powered and secured by <span className='underline'>Wix</span></a>
    <div className='border-b-[1px] mt-4'>
      </div>
</div>
        </div>
      </div>
     
      </div>
     
 )}

      {/* Routes */}
      <Routes>
        <Route path='/wix' element={<Hero />} />
        <Route path='/read' element={<Read />} />
        <Route path='/edit' element={<Edit />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}
