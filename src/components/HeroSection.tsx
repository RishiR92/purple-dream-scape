
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              The AI That Truly <span className="text-asmi-600">Knows You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Asmi is an always-on, voice-first AI OS that passively listens, understands your context, and becomes your personal command center for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-asmi-600 hover:bg-asmi-700 text-white px-8 py-6 rounded-lg text-lg flex items-center">
                Try Asmi Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-asmi-300 text-asmi-700 hover:bg-asmi-50 px-8 py-6 rounded-lg text-lg flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="relative z-10">
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-asmi-200 to-asmi-400 rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/4c6f6ac8-4db3-4875-9bf5-755889b0266b.png"
                  alt="Asmi AI Interface"
                  className="w-3/4 h-auto object-contain animate-float"
                />
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-asmi-300 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-asmi-400 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-asmi-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-asmi-200 rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
};

export default HeroSection;
