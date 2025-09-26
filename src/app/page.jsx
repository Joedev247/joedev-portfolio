"use client";
import React from "react";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import TechStackSection from "../components/sections/TechStackSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";
import AnimatedBackground from "../components/sections/AnimatedBackground";

const Portfolio = () => {
  return (
    <div className="relative">
      <AnimatedBackground />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <AboutSection />
        <TechStackSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Portfolio;
