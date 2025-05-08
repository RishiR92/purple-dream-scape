
import React from 'react';
import { Brain, CalendarDays, ListTodo, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCard = ({ title, description, icon: Icon }: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden card-hover border-none">
      <CardContent className="p-6">
        <div className="h-12 w-12 bg-asmi-100 rounded-lg flex items-center justify-center mb-5">
          <Icon className="text-asmi-600" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Daily Planner",
      description: "Sends your personalized \"Today's Plan\" every morning.",
      icon: CalendarDays
    },
    {
      title: "To-Do Manager",
      description: "Creates, tracks, and reminds you of your tasks.",
      icon: ListTodo
    },
    {
      title: "Memory Keeper",
      description: "Saves everything—texts, voice notes, ideas, links—and recalls it instantly when you need.",
      icon: MessageSquare
    },
    {
      title: "Personal AI",
      description: "Ask anything. Get answers tailored to your life, not just from the internet.",
      icon: Brain
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Asmi Can Do For You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your Smartest Life Companion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            All over WhatsApp. All personalized just for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
