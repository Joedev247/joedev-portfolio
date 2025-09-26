// src/components/TechCard.jsx
import { motion } from "framer-motion";

const TechCard = ({ name, imageUrl, category, experience }) => (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="group relative bg-gray-900/50 p-6 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300 "
>
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity " />
  
  <div className="relative">
    <div className="flex items-center gap-4 mb-3">
      <motion.div 
        className="p-2 bg-gray-800/50  group-hover:bg-orange-500/10 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Fallback to a default icon or hide the image
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2'%3E%3Cpath d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/%3E%3C/svg%3E";
            e.currentTarget.style.filter = 'brightness(0.8)';
          }}
        />
      </motion.div>
      <div>
        <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
          {name}
        </p>
        {category && (
          <p className="text-orange-400 text-xs font-medium">
            {category}
          </p>
        )}
      </div>
    </div>
    {experience && (
      <div className="text-gray-500 text-xs">
        {experience}
      </div>
    )}
  </div>
</motion.div>
);

export default TechCard;