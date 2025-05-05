
import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="py-6 px-4 md:px-8 lg:px-12 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-asmi-600">Asmi</h1>
          <p className="hidden md:block ml-2 text-sm text-gray-600">Voice-powered AI OS</p>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-asmi-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-asmi-600 transition-colors">How it Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-asmi-600 transition-colors">Testimonials</a>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="default" className="bg-asmi-600 hover:bg-asmi-700">Try Asmi Free</Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50 animate-fade-in">
            <div className="flex flex-col p-4">
              <a href="#features" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors">Features</a>
              <a href="#how-it-works" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors">How it Works</a>
              <a href="#testimonials" className="py-2 text-gray-600 hover:text-asmi-600 transition-colors">Testimonials</a>
              <Button variant="default" className="mt-4 bg-asmi-600 hover:bg-asmi-700">Try Asmi Free</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
