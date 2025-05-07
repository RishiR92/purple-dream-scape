
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
        ))}
      </div>
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-asmi-100 w-8 h-8 opacity-50" />
        <p className="text-gray-700 italic mb-6 relative z-10">{quote}</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Asmi feels like the first AI that actually knows me. I speak freely, and it just gets things done.",
      author: "Alex Morgan",
      role: "Founder, Beta User"
    },
    {
      quote: "I forward everything to Asmi—ideas, links, voice notes. It remembers everything and reminds me exactly when I need it.",
      author: "Sneha",
      role: "Working Professional"
    },
    {
      quote: "Asmi helps me stay on top of everything—personal and work. I no longer forget things I tell myself in the middle of the day.",
      author: "Rajeev",
      role: "Product Manager"
    },
    {
      quote: "Talking to Asmi is like talking to my future self. It's organized, efficient, and somehow always knows what I need next.",
      author: "Tanya",
      role: "Creative Writer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Loved by Early Users</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what people are saying about their experience with Asmi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              role={testimonial.role} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
