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
    <header className="flex justify-between items-center mb-16 p-8">
      <div className="w-1/4">
        <div className="relative border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-blue-500 opacity-50 blur-sm"></div>
          <Image 
            src="/images/Profile.jpg" 
            alt="Praveen" 
            width={200} 
            height={200} 
            className="relative z-10 w-full h-auto"
          />
        </div>
      </div>
      
      <div className="w-1/3 text-center">
        <h1 className="text-5xl font-bold">
          Hi, I&apos;m <span className={`animate-gradient-x bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>Praveen</span>
        </h1>
      </div>
      
      <div className="w-1/3 space-y-4">
        <p className="text-xl">I&apos;m a Full Stack Developer based in India.</p>
        <div className="pt-4 space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">View Resume</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
