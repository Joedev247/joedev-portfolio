"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amara Okonkwo",
      role: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      rating: 5,
      text: "Joseph delivered an exceptional e-commerce platform that increased our online sales by 150%. His attention to detail and modern design approach truly set our business apart from competitors.",
      image: "https://ui-avatars.com/api/?name=Amara+Okonkwo&background=ea580c&color=fff&size=200&rounded=true",
    },
    {
      name: "Kwame Asante",
      role: "Founder, EduLearn Platform",
      company: "EduLearn Platform",
      rating: 5,
      text: "Working with Joseph was a game-changer for our educational platform. The interactive features and seamless user experience he created resulted in 70% higher course completion rates.",
      image: "https://ui-avatars.com/api/?name=Kwame+Asante&background=ea580c&color=fff&size=200&rounded=true",
    },
    {
      name: "Fatima Mbeki",
      role: "Digital Marketing Director",
      company: "Creative Agency Co.",
      rating: 5,
      text: "Joseph's web development skills are outstanding. He built us a lightning-fast website that improved our page load times by 85% and significantly boosted our search engine rankings.",
      image: "https://ui-avatars.com/api/?name=Fatima+Mbeki&background=ea580c&color=fff&size=200&rounded=true",
    },
  ];

  return (
    <section className="py-24 relative px-4 sm:px-6 lg:px-8" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span 
              className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
              style={{
                textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
                WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
              }}
            >
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See what my clients say about working with me and the results we've achieved together
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-800  p-6 hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-orange-500/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-orange-500/20 to-orange-600/20 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-orange-400 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to join my satisfied clients? Let's create something amazing together.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.stopPropagation();
              // Smooth scroll to contact section
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25  min-h-[48px] relative z-30 cursor-pointer select-none touch-manipulation active:scale-95"
            style={{ 
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
