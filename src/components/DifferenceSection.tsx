
import React from 'react';

const DifferenceSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-asmi-300 to-asmi-500 rounded-xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Starts on WhatsApp</h3>
                    <p className="text-white/90 text-lg">
                      Built around your life. Where your life already happens—on WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-asmi-200 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-asmi-100 rounded-full"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Asmi Is Different</h2>
            <h3 className="text-2xl font-semibold mb-4 text-asmi-600">Starts on WhatsApp. Built Around Your Life.</h3>
            <p className="text-lg text-gray-600 mb-6">
              Most AI tools need apps and effort. Asmi lives where your life already happens—on WhatsApp. 
              You talk to it just like a friend, and it becomes your second brain, always on, always helpful.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3">How Asmi compares to other AI assistants:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-asmi-100 text-asmi-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Lives in WhatsApp vs. requiring a separate app</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-asmi-100 text-asmi-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Remembers your context vs. isolated conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-asmi-100 text-asmi-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Becomes your second brain vs. just answering questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
};

export default DifferenceSection;
