import { motion } from 'framer-motion';
import { Boxes, ArrowRight, Calendar, Users, Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "HOLY BIBLE",
      description:
        "Digital Bible platform that enhances spiritual engagement with offline reading capabilities, bookmarking system, and verse search functionality that increases user retention by 85%.",
      image: "/bible-app.png",
      link: "https://joedev-bible.vercel.app/",
      github: "https://github.com/josephjose121/holy-bible-app",
      stats: [
        { icon: <Calendar className="w-4 h-4" />, value: "2023" },
        { icon: <Users className="w-4 h-4" />, value: "5K+" },
        { icon: <Code2 className="w-4 h-4" />, value: "Next.js" },
      ],
    },
    {
      title: "CODING JOJO",
      description:
        "E-learning platform that increases coding proficiency with interactive tutorials, progress tracking, and certification system that drives 70% course completion rates.",
      image: "/elearning-app.png",
      link: "https://codingjojo.vercel.app/",
      github: "https://github.com/josephjose121/coding-jojo",
      stats: [
        { icon: <Calendar className="w-4 h-4" />, value: "2023" },
        { icon: <Users className="w-4 h-4" />, value: "3K+" },
        { icon: <Code2 className="w-4 h-4" />, value: "React" },
      ],
    },
    {
      title: "GRINNOV",
      description:
        "Business curriculum platform that streamlines educational content delivery with automated assessments and progress analytics, reducing administrative time by 60%.",
      image: "/business-app.png",
      link: "https://grinovv-curriculum.vercel.app/",
      github: "https://github.com/josephjose121/grinnov-platform",
      stats: [
        { icon: <Calendar className="w-4 h-4" />, value: "2023" },
        { icon: <Users className="w-4 h-4" />, value: "2K+" },
        { icon: <Code2 className="w-4 h-4" />, value: "Next.js" },
      ],
    },
    {
      title: "ITAPELO",
      description:
        "E-commerce beauty store with secure payment processing, inventory management, and customer analytics that increased online sales by 150% within 6 months.",
      image: "/ecommerce-app.png",
      link: "https://itapelobeautystore.vercel.app/",
      github: "https://github.com/josephjose121/itapelo-store",
      stats: [
        { icon: <Calendar className="w-4 h-4" />, value: "2024" },
        { icon: <Users className="w-4 h-4" />, value: "1K+" },
        { icon: <Code2 className="w-4 h-4" />, value: "React" },
      ],
    },
  ];

  return (
    <section
      className="py-24  relative px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      {/* Enhanced Background Effects */}
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
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Boxes className="w-5 h-5 text-orange-500" />
            <p className="text-orange-500 font-medium text-sm uppercase tracking-wider">
              Featured Projects
            </p>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
            style={{
              textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
              WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
            }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Here are some selected projects that showcase my expertise in web
            development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>

        {/* Enhanced View More Button */}
        <motion.div
          className="mt-16 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Joedev247/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Force open in new tab
              window.open('https://github.com/Joedev247/', '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500 hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 group  cursor-pointer select-none touch-manipulation min-h-[48px] relative z-30 active:scale-95"
            style={{ 
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
