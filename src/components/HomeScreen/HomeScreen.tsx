import React from 'react';
import './HomeScreen.css';
import MyName from './MyName';
import MyPhoto from './MyPhoto';

const HomeScreen: React.FC = () => {
  return (
    <div className="dark:bg-black flex-1 min-h-screen">
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 p-8">
        
        {/* Flex container with responsive behavior */}
        <div className="flex flex-col md:flex-row items-center w-full">

          {/* Image Section */}
          <div className="flex items-center py-5 w-full md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
            <div className="relative w-full p-3 rounded md:p-8">
              <div className="rounded-lg text-black w-full">
                <MyPhoto />
              </div>
            </div>
          </div>

          {/* Name and Description Section */}
          <div className="flex items-center justify-center py-5 w-full md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div className="text-left">
              <MyName />
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Hello, <br />
                I am Jay, a dedicated software developer with a knack for problem solving and a love for coding. With experience in Python, Flutter, React, C, and Linux, I'm always excited to dive into new challenges and innovate with technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
