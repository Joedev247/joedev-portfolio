"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Zap, 
  ShieldCheck,
  ArrowRight,
  DollarSign
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Modern, responsive websites that drive conversions and establish your digital presence.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      price: "From $500",
      timeline: "1-2 weeks",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Application",
      description: "Custom web applications built with cutting-edge technologies for your business needs.",
      features: ["Custom Features", "Scalable Architecture", "User Authentication", "Admin Dashboard"],
      price: "From $1,200",
      timeline: "3-6 weeks",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Development",
      description: "Robust APIs and backend services that power your applications efficiently.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Documentation"],
      price: "From $300",
      timeline: "1-3 weeks",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web App",
      description: "App-like experiences that work offline and provide native mobile features.",
      features: ["Offline Functionality", "Push Notifications", "App Store Ready", "Cross Platform"],
      price: "From $800",
      timeline: "2-4 weeks",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing website and improve user experience significantly.",
      features: ["Speed Optimization", "SEO Improvement", "Code Review", "Performance Audit"],
      price: "From $200",
      timeline: "3-5 days",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      features: ["Bug Fixes", "Security Updates", "Feature Updates", "24/7 Support"],
      price: "From $100/month",
      timeline: "Ongoing",
    },
  ];

  return (
    <section className="py-24 relative px-4 sm:px-6 lg:px-8" id="services">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
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
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional development services tailored to grow your business with modern technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-800  p-6 hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20  text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center text-orange-400 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {service.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {service.timeline}
                  </div>
                </div>

                {/* CTA Button */}
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
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 text-orange-400 hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 group/btn  min-h-[40px] relative z-20 cursor-pointer select-none touch-manipulation active:scale-95"
                  style={{ 
                    pointerEvents: 'auto',
                    userSelect: 'none'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
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
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
