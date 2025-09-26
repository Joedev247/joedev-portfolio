import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.stopPropagation();
      // Force open in new tab for better reliability
      if (href && href !== '#') {
        window.open(href, '_blank', 'noopener,noreferrer');
        e.preventDefault();
      }
    }}
    className="w-10 h-10 flex items-center justify-center  bg-gray-800/50 text-gray-400 hover:bg-orange-500/20 hover:text-orange-500 transition-colors duration-300 cursor-pointer select-none touch-manipulation relative z-30"
    style={{ 
      pointerEvents: 'auto',
      userSelect: 'none'
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    title={label}
    aria-label={label}
  >
    <Icon className="w-5 h-5 flex-shrink-0" />
  </motion.a>
);

export default SocialLink;
