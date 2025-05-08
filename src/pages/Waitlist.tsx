
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Waitlist = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-600 hover:text-asmi-600"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to home
            </Button>
          </div>
          
          {/* Celebrity testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-asmi-500 to-asmi-700 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">S</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-full shadow-md p-1">
                    <div className="bg-blue-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.688 1.943-1.99 1.943-3.484v-.001z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                  "Asmi has become my secret weapon. It's like having a 24/7 executive assistant who knows exactly what I need before I do."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Steve Johnson</p>
                    <p className="text-sm text-gray-600">Founder & CEO, TechNova</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Welcome message */}
          <div className="bg-gradient-to-r from-asmi-800 to-asmi-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Welcome, my superstar.
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              You're part of the same tribe now as Steve. 
              <span className="block mt-2">Magic is brewing—you're <span className="font-bold">#4888</span> in the queue and climbing.</span>
            </p>
            
            <div className="w-full max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm opacity-80">
                <span>Waitlist filling up</span>
                <span>33% complete</span>
              </div>
            </div>
            
            <div className="animate-float">
              <p className="text-xl font-medium mb-6">Stay tuned!</p>
              <div className="inline-flex space-x-2 items-center bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>We'll notify you when it's your turn</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Waitlist;
