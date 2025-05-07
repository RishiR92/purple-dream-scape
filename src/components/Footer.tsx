
import React from 'react';
import { Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-asmi-600 mr-2">Asmi</h2>
              <span className="text-sm text-gray-500">• Personal Assistant on WhatsApp</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Your AI that listens, remembers, and helps you run your life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-asmi-600 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-asmi-600 transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-asmi-600 transition-colors">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Asmi AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-asmi-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-asmi-600 text-sm">Discord</a>
            <a href="#" className="text-gray-500 hover:text-asmi-600 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
