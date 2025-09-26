"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      step: "01",
      title: "Discovery",
      description: "We discuss your vision, goals, and requirements to understand exactly what you need.",
      duration: "1-2 days",
      deliverables: ["Project brief", "Technical requirements", "Timeline estimate", "Cost proposal"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      step: "02", 
      title: "Design",
      description: "Creating wireframes and designs that align with your brand and user experience goals.",
      duration: "3-5 days",
      deliverables: ["Wireframes", "UI/UX design", "Design system", "Client approval"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      step: "03",
      title: "Development",
      description: "Building your application with clean, scalable code and regular progress updates.",
      duration: "1-4 weeks",
      deliverables: ["Weekly demos", "Code reviews", "Testing phases", "Documentation"],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      step: "04",
      title: "Launch",
      description: "Deploying your project live with thorough testing and ongoing support included.",
      duration: "2-3 days",
      deliverables: ["Live deployment", "Performance testing", "Training materials", "Support handover"],
    },
  ];

  return (
    <section className="py-24 relative px-4 sm:px-6 lg:px-8" id="process">
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
              My Process
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven workflow that ensures your project is delivered on time, on budget, and exceeds expectations
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-800  p-6 hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Step Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 mx-auto shadow-lg">
                {step.icon}
              </div>

              {/* Step Number and Duration */}
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-orange-500 block mb-2">
                  {step.step}
                </span>
                <div className="flex items-center justify-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{step.duration}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm text-center leading-relaxed">
                {step.description}
              </p>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-orange-400 mb-3 text-center">
                  Key Deliverables:
                </h4>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{deliverable}</span>
                    </li>
                  ))}
                </ul>
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to start your project with this proven process?
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
            <span>Let's Get Started</span>
            <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
