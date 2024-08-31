'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [gradientClass, setGradientClass] = useState('');

  useEffect(() => {
    const gradients = [
      'from-purple-400 via-pink-500 to-red-500',
      'from-green-400 via-blue-500 to-purple-500',
      'from-yellow-400 via-red-500 to-pink-500',
      'from-blue-400 via-indigo-500 to-purple-500',
      'from-red-400 via-yellow-500 to-green-500',
    ];
    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setGradientClass(randomGradient);
  }, []);

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 mb-16 p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        <div className="relative border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
          <div className="absolute inset-0 bg-blue-500 opacity-50 blur-sm"></div>
          <Image 
            src="/images/Profile.jpg" 
            alt="Praveen" 
            width={300} 
            height={300} 
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Hi, I&apos;m <span className={`animate-gradient-x bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>Praveen</span>
        </h1>
      </div>
      
      <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
        <p className="text-xl sm:text-2xl text-gray-600">I&apos;m a Full Stack Developer based in India.</p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto">View Resume</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 w-full sm:w-auto">Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
