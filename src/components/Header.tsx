
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 py-6 px-4 md:px-8 lg:px-12 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-asmi-600">Asmi</h1>
          <p className="hidden md:block ml-2 text-sm text-gray-600">Your AI on WhatsApp</p>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-asmi-600 transition-colors relative group">
            Features
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-asmi-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-asmi-600 transition-colors relative group">
            How it Works
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-asmi-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-asmi-600 transition-colors relative group">
            Testimonials
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-asmi-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="default" className="bg-asmi-600 hover:bg-asmi-700 rounded-full px-6">Try Asmi on WhatsApp</Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg md:hidden z-50 animate-fade-in">
            <div className="flex flex-col p-6 space-y-4">
              <a href="#features" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors text-lg">Features</a>
              <a href="#how-it-works" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors text-lg">How it Works</a>
              <a href="#testimonials" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors text-lg">Testimonials</a>
              <Button variant="default" className="mt-4 bg-asmi-600 hover:bg-asmi-700 rounded-full w-full">Try Asmi on WhatsApp</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
