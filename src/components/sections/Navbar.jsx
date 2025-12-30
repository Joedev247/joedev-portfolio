"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Mail,
  User,
  Boxes,
  Home,
  Briefcase,
  Users,
  Settings,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Tech Stack", icon: Code2 },
    { name: "Services", icon: Briefcase },
    { name: "Projects", icon: Boxes },
    { name: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed w-full z-50 flex justify-center">
      <div className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <nav
          className={`w-full mt-6 border border-orange-500/30 transition-all duration-300 ${
            scrolled
              ? "bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-orange-500/20"
              : "bg-gray-900/80 backdrop-blur-md shadow-xl shadow-orange-500/15"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <a href="/" className="relative z-50 flex items-center gap-4">
            <img
            src="/logo.png"
            alt="Joseph Jose"
            />
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                  className="px-3 py-1.5 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium  hover:bg-orange-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2  bg-gray-800/50 text-gray-300 hover:text-orange-500 hover:bg-orange-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Enhanced Mobile Menu Panel */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="fixed top-0 right-0 bottom-0 w-[280px] bg-gray-900/95 backdrop-blur-sm md:hidden p-6 pt-24 shadow-xl"
                  >
                    <div className="flex flex-col space-y-6">
                      {menuItems.map((item) => (
                        <motion.a
                          key={item.name}
                          href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors text-lg font-medium group"
                          onClick={() => setIsOpen(false)}
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2  bg-gray-800/50 group-hover:bg-orange-500/20 transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
