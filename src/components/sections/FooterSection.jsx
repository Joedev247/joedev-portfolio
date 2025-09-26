import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  User,
  Code,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Globe,
  Star,
  ChevronRight,
  ExternalLink,
  Heart,
  Coffee
} from 'lucide-react';

const FooterSection = ({ name = "Your Name" }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Joedev247/", color: "hover:text-gray-100" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/joseph-jose-oribaloye-558043348",
      color: "hover:text-blue-500",
    },
    { name: "Twitter", icon: Twitter, href: "https://x.com/Joedev237", color: "hover:text-sky-500" },
    
  ];

  const quickLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Tech Stack", href: "#tech-stack", icon: Cpu },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "joedev247@gmail.com",
      href: "mailto:joedev247@gmail.com",
    },
    { icon: Phone, text: "(+237) 6 53 95 61 70", href: "tel:+237 653956170" },
    { icon: MapPin, text: "Cameroon, Douala", href: "https://maps.google.com" },
  ];

  return (
    <footer className=" relative pt-16 pb-8 border-t border-gray-800/50">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-30 h-30">
                  <img src="/logo.png" alt="#" />
                </div>
              </motion.div>
              <p className="text-gray-400 text-sm">
                Crafting digital experiences with passion and precision.
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Code className="w-4 h-4 text-orange-500" />
                <span>with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-500" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 flex items-center gap-2 text-sm transition-colors duration-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                Contact Info
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-orange-500 flex items-center gap-2 text-sm transition-colors duration-200 group"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.text}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-500" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 flex items-center justify-center  bg-gray-800/50 text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 mt-8 border-t border-gray-800/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Joedev. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
