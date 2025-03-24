import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import assets from "../../Assets/assets";


const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-black to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Catch Up on Learning, Master Past Questions &amp; Succeed!
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-indigo-100 max-w-3xl">
                Prepare for Common Entrance, WAEC, and JAMB with AI-powered video explanations. 
                Adults can also learn basic literacy with live classes.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/download" 
                  className="px-8 py-3 text-lg font-medium rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaDownload/> Get the App
                </Link>
                <Link 
                  to="/live-classes" 
                  className="px-8 py-3 text-lg font-medium rounded-lg bg-indigo-800 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-600 shadow-lg flex items-center justify-center gap-2"
                >
                  <SiGoogleclassroom/> Join Live Classes
                </Link>
              </div>
            </div>
            
            {/* Image/illustration */}
            {/* <div className="hidden md:block">
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-xl transform rotate-3 absolute z-10">
                  <div className="w-80 h-60 bg-indigo-100 rounded overflow-hidden">
                    <div className="h-8 bg-indigo-600 flex items-center px-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-3">
                      <div className="h-3 bg-gray-300 rounded-full w-full mb-3"></div>
                      <div className="h-3 bg-gray-300 rounded-full w-5/6 mb-3"></div>
                      <div className="mt-6 grid grid-cols-2 gap-2">
                        <div className="h-16 bg-indigo-200 rounded"></div>
                        <div className="h-16 bg-indigo-200 rounded"></div>
                        <div className="h-16 bg-indigo-200 rounded"></div>
                        <div className="h-16 bg-indigo-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-xl transform -rotate-2 absolute z-20 -bottom-6 -right-6">
                  <div className="w-60 h-40 bg-purple-100 rounded overflow-hidden">
                    <div className="h-6 bg-purple-600 flex items-center px-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-2">
                      <div className="h-8 w-8 bg-purple-500 rounded-full mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-full mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-5/6 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="bg-wh flex justify-center relative">
              <div className="rounded-full overflow-hidden w-[400px] z-20 border-2 border-black shadow-2xl">
                <img src={assets.heero} alt="" />
              </div>
              <div className="absolute w-[300px] h-[300px] bg-blue-400 rounded-full right-0 z-10 "></div>
              <div className="absolute w-[300px] h-[300px] bg-yellow-400 rounded-full left-0 bottom-0 z-10 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;