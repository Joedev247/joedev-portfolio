import { Code2, Globe, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import TechCard from './TechCard';

const TechStackSection = () => {
  const technologies = [
    {
      name: "HTML",
      imageUrl: "/tech/html.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "CSS",
      imageUrl: "/tech/css.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "Tailwind",
      imageUrl: "/tech/tailwind.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "JavaScript",
      imageUrl: "/tech/javascript.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "TypeScript",
      imageUrl: "/tech/typescript.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "React JS",
      imageUrl: "/tech/reactjs.svg",
      category: "Frontend",
      experience: "3+ years"
    },
    {
      name: "Next JS",
      imageUrl: "/tech/nextjs.svg",
      category: "Fullstack",
      experience: "3+ years"
    },
    {
      name: "Nest JS",
      imageUrl: "/tech/nextjs.svg",
      category: "Backend",
      experience: "3+ years"
    },
    {
      name: "Node JS",
      imageUrl: "/tech/nodejs.svg",
      category: "Backend",
      experience: "3+ years"
    },
    {
      name: "MongoDB",
      imageUrl: "/tech/mongodb.svg",
      category: "Database",
      experience: "3+ years"
    },
    {
      name: "MySQL",
      imageUrl: "/tech/mysql.svg",
      category: "Database",
      experience: "3+ years"
    },
    {
      name: "Git/GitHub",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools",
      experience: "3+ years"
    },
  ];

  const performanceMetrics = [
    {
      icon: <Zap className="w-6 h-6" />,
      metric: "Page Load Speed",
      value: "< 2 seconds",
      description: "Lightning-fast loading times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      metric: "Security Score",
      value: "A+ Rating",
      description: "Top-tier security practices"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "Performance Score",
      value: "95+/100",
      description: "Optimized for peak performance"
    },
  ];

  return (
    <section
      className="py-24  relative px-4 sm:px-6 lg:px-8"
      id="tech-stack"
    >
      {/* Enhanced Background Effects */}
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
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
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
        {/* Section Header */}
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
            <Code2 className="w-5 h-5 text-orange-500" />
            <p className="text-orange-500 font-medium text-sm uppercase tracking-wider">
              My Technical Expertise
            </p>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
            style={{
              textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
              WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
            }}
          >
            Tech Stack
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Here are the technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              className="bg-black/40 backdrop-blur-sm border border-gray-800  p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full text-orange-500 mb-4">
                {metric.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {metric.value}
              </h3>
              <p className="text-orange-400 font-medium mb-1">
                {metric.metric}
              </p>
              <p className="text-gray-400 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 text-center flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Globe className="w-5 h-5 text-orange-500" />
          <p className="text-gray-400 text-sm">
            Always learning and exploring new technologies to stay current with
            industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
