import React from 'react';

const Navigation = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Sanjay Chilumuru</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;