import { motion } from 'framer-motion';
import { Rocket, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, link, github, stats }) => (
  <motion.div
    className="group relative bg-gray-900/50  overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    {/* Enhanced Gradient Overlay with Blur Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />
    
    {/* Additional Blur Overlay for Hover */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-15" />

    {/* Image Container */}
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
      {/* Enhanced Content Background for Better Readability */}
      <div className="bg-black/20 backdrop-blur-sm  p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        {/* Project Stats */}
        <div className="flex items-center gap-4 mb-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center text-xs text-gray-300"
            >
              {stat.icon}
              <span className="ml-1">{stat.value}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          {title}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="w-4 h-4 text-orange-500" />
          </motion.div>
        </h3>

        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2  bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:text-orange-300 transition-colors text-sm border border-orange-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2  bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/60 transition-colors text-sm border border-gray-600/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Source
            </motion.a>
          )}
        </div>
      </div>
      
      {/* Title Always Visible */}
      <div className="group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
          {title}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="w-4 h-4 text-orange-500" />
          </motion.div>
        </h3>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
