
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-asmi-600 to-asmi-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get Started</h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Join thousands of early users building their superhuman selves with Asmi.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-asmi-700 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg flex items-center justify-center">
                Download Asmi Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg flex items-center justify-center">
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
