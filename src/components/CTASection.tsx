
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div 
          className={`max-w-4xl mx-auto bg-gradient-to-br from-asmi-600 to-asmi-800 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="p-12 text-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-asmi-900/30 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">Get Started</h2>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto relative z-10">
              Join thousands of early users building their superhuman selves with Asmi on WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
              <Button className="bg-white text-asmi-700 hover:bg-gray-100 px-8 py-6 rounded-full text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Start Chatting with Asmi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-asmi-300 via-asmi-400 to-asmi-300"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
