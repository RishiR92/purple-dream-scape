
import React from 'react';
import { MessageSquare, Brain, Clock } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon }: { number: number; title: string; description: string; icon: any }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left mb-12 md:mb-0">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-asmi-100 rounded-full flex items-center justify-center">
          <Icon className="text-asmi-600" size={28} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-asmi-600 rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Send or Forward Anything",
      description: "Texts, voice notes, reminders, or tasks.",
      icon: MessageSquare
    },
    {
      number: 2,
      title: "Asmi Understands",
      description: "It learns your context—tasks, events, priorities—and stores it in memory.",
      icon: Brain
    },
    {
      number: 3,
      title: "Get Help Instantly",
      description: "Daily plans, smart reminders, answers to questions—all deeply personalized.",
      icon: Clock
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Asmi uses AI to turn your WhatsApp into a personal operating system.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:space-x-16 md:space-y-0 space-y-8">
          {steps.map((step, index) => (
            <Step 
              key={index} 
              number={step.number} 
              title={step.title} 
              description={step.description} 
              icon={step.icon} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-asmi-100 text-asmi-700 font-medium rounded-full px-6 py-2 mb-4">
            No learning curve
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">No new app. No learning curve. Just your WhatsApp.</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Asmi is designed to seamlessly integrate with the messaging app you already use every day.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
};

export default HowItWorksSection;
