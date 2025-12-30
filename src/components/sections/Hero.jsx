"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/joseph-jose-oribaloye-558043348", label: "LinkedIn Profile" },
    { icon: Github, href: "https://github.com/Joedev247/", label: "GitHub Profile" },
    { icon: Instagram, href: "https://x.com/Joedev237", label: "Twitter Profile" },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8 font-sans"
      id="home"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-128px)]">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Single-line Stylish Name */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold">
                <span className="relative inline-block transform hover:scale-105 transition-transform duration-300">
                  {/* Combined Name with Gradient */}
                  <span className="relative z-10 inline-flex items-baseline">
                    <span
                      className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
                      style={{
                        textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
                        WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
                      }}
                    >
                      Joseph
                    </span>
                    <span
                      className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-white filter drop-shadow-lg ml-4"
                      style={{
                        textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
                        WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
                      }}
                    >
                      Jose
                    </span>
                  </span>

                  {/* Enhanced Decorative Elements */}
                  <motion.span
                    className="absolute -top-4 -left-6 w-4 h-4 border-t-2 border-l-2 border-orange-500 rounded-tl-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.span
                    className="absolute -bottom-4 -right-6 w-4 h-4 border-b-2 border-r-2 border-orange-500 rounded-br-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />

                  {/* Curved Accent Below Name */}
                  <motion.span
                    className="absolute -bottom-8 left-0 w-full h-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <svg
                      viewBox="0 0 200 40"
                      className="w-full h-full absolute opacity-20"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="50%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                      <path d="M0,20 Q100,35 200,20" />
                    </svg>
                  </motion.span>

                  {/* Top Decorative Curve */}
                  <motion.span
                    className="absolute -top-6 left-0 w-full h-16 rotate-180"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <svg
                      viewBox="0 0 200 40"
                      className="w-full h-full absolute opacity-20"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                    >
                      <path d="M0,20 Q100,5 200,20" />
                    </svg>
                  </motion.span>
                </span>
              </motion.h1>
            </motion.div>

            <h2 className="text-2xl md:text-3xl text-gray-400 font-light h-[40px]">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
              />
            </h2>

            {/* Value Proposition */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-orange-400 font-semibold text-lg">
                I build fast, modern web applications for businesses
              </p>
              <p className="text-gray-400 max-w-lg text-sm md:text-base text-justify">
                As a dedicated fullstack developer, I transform complex technical
                challenges into elegant digital solutions that not only meet
                business objectives but also delight users through intuitive
                interfaces and seamless functionality.
              </p>
              <p className="text-gray-500 text-sm italic">
                📍 Based in Cameroon, Available Worldwide
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Download CV Button */}
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  try {
                    // Create a temporary link element to force download
                    const link = document.createElement('a');
                    link.href = '/Joedev-cv.pdf';
                    link.download = 'Joseph_Jose_CV.pdf';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } catch (error) {
                    // Fallback: open in new tab if download fails
                    window.open('/Joedev-cv.pdf', '_blank', 'noopener,noreferrer');
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium
                hover:from-orange-600 hover:to-orange-700 transition-all duration-300
                shadow-lg hover:shadow-orange-500/25 space-x-2 cursor-pointer  min-h-[48px] relative z-30
                active:scale-95 select-none touch-manipulation"
                style={{ 
                  pointerEvents: 'auto',
                  userSelect: 'none'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download CV</span>
              </motion.button>

              {/* Start Project Button */}
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
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium
                hover:bg-orange-500 hover:text-white transition-all duration-300
                shadow-lg hover:shadow-orange-500/25 space-x-2 cursor-pointer  min-h-[48px] relative z-30
                active:scale-95 select-none touch-manipulation"
                style={{ 
                  pointerEvents: 'auto',
                  userSelect: 'none'
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Start Project</span>
              </motion.a>
            </motion.div>
          </motion.div>

          

          {/* Profile Image */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-20 xl:pl-32" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-auto lg:mr-0">
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Ring Light Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Outer Ring */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(249, 115, 22, 0.4), rgba(234, 88, 12, 0.4))",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner Ring Light */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image with Border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-orange-500/10 to-orange-600/10">
                    <img
                      src="/joedev247-pic.jpeg"
                      alt="Joseph Jose"
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(249, 115, 22, 0.3)",
                      }}
                    />
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-orange-500/30 blur-sm"
                  initial={{
                    x: Math.random() * 360 - 180,
                    y: Math.random() * 360 - 180,
                  }}
                  animate={{
                    x: Math.random() * 360 - 180,
                    y: Math.random() * 360 - 180,
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
