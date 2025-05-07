
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              The Smartest <span className="text-asmi-600">Personal Assistant</span> on WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Turn every note or voice message into action—Asmi extracts key info, remembers it, and helps you get things done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-asmi-600 hover:bg-asmi-700 text-white px-8 py-6 rounded-full text-lg flex items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Try Asmi Free on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>
              <Button 
                variant="outline" 
                className="border-asmi-300 text-asmi-700 hover:bg-asmi-50 px-8 py-6 rounded-full text-lg flex items-center hover:shadow-md transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative z-10">
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-asmi-200 to-asmi-400 rounded-[32px] shadow-2xl flex items-center justify-center overflow-hidden border border-white/20 backdrop-blur">
                <img 
                  src="/lovable-uploads/2e3dbaeb-16e1-4adf-b319-3a77bb2da76c.png"
                  alt="Asmi WhatsApp Interface"
                  className="w-3/4 h-auto object-contain animate-float"
                />
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-asmi-300 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-asmi-400 rounded-full filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200 rounded-full filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
