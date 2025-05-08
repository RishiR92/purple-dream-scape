
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-asmi-600 to-asmi-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/8f1e0186-4660-4f70-9ec1-d42871d38989.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get Started</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of early users building their superhuman selves with Asmi on WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-asmi-600 hover:bg-gray-100">
              Start Chatting with Asmi →
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/waitlist">
                Join Waitlist
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-asmi-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTASection;
