
import React from 'react';
import { Check, MessageSquare, Calendar, Heart, Settings } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-asmi-200">
      <div className="w-12 h-12 bg-asmi-100 rounded-lg flex items-center justify-center mb-5">
        <Icon className="text-asmi-600" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Chief of Staff",
      description: "Plans your day, prepares you for meetings, takes notes, plans travel, pays bills.",
      icon: Settings
    },
    {
      title: "Wellness Coach",
      description: "Creates plans based on your daily schedule, pushes you to follow through, tracks your progress.",
      icon: Heart
    },
    {
      title: "Entertainment Curator",
      description: "Suggests shows, food, and travel based on your mood and preferences.",
      icon: MessageSquare
    },
    {
      title: "Memory Keeper",
      description: "Recalls what matters—from a thought you had in the car to a gift idea from last week.",
      icon: Calendar
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Asmi Can Do For You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your Smartest Life Companion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-asmi-500 to-asmi-700 rounded-2xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">All working together seamlessly</h3>
              <p className="text-white/80 text-lg">
                Asmi integrates every aspect of your life, creating a personalized experience that just works.
                No typing. No toggling between apps. Just your voice.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <Check size={48} className="text-asmi-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
