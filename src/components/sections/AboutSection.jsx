import { User, Briefcase, GraduationCap, Code2, Laptop, Trophy, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <>
      <section
        className="py-24 relative px-4 sm:px-6 lg:px-8"
        id="about"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-700/5 rounded-full blur-2xl animate-pulse" />
        </div>

        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <User className="w-5 h-5 text-orange-500" />
              <p className="text-orange-500 font-medium text-sm uppercase tracking-wider">
                Get To Know More
              </p>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
              style={{
                textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
                WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
              }}
            >
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Stats Cards */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Experience Card */}
                <div className="group bg-gray-900/50 p-6  backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/10  group-hover:bg-orange-500/20 transition-colors">
                      <Briefcase className="text-orange-500 w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold">Experience</h3>
                  </div>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-1">
                    3+ years
                  </p>
                  <p className="text-gray-400 text-sm">Fullstack Web Developer</p>
                </div>

                {/* Education Card */}
                <div className="group bg-gray-900/50 p-6  backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/10  group-hover:bg-orange-500/20 transition-colors">
                      <GraduationCap className="text-orange-500 w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold">Education</h3>
                  </div>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-1">
                    Web Development
                  </p>
                  <p className="text-gray-400 text-sm">SEVEN ADVANCED ACADEMY</p>
                </div>
              </div>

              {/* Description with Icons */}
              <div className="text-gray-300 space-y-6">
                <div className="flex gap-4">
                  <Code2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="leading-relaxed text-sm md:text-base text-justify">
                    As a dedicated fullstack developer with 3+ years of experience, I specialize in architecting and developing both client-side and server-side applications. I excel at translating complex business requirements into scalable, high-performance web solutions that drive measurable results for organizations.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Laptop className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="leading-relaxed text-sm md:text-base text-justify">
                    My technical expertise spans modern frameworks including React, Next.js, Node.js, and database technologies. I deliver robust applications that prioritize user experience, performance optimization, and maintainable code architecture while consistently meeting project deadlines.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="leading-relaxed text-sm md:text-base text-justify">
                    I am committed to staying at the forefront of emerging technologies and industry best practices. My goal is to create innovative digital solutions that not only meet current business needs but also position organizations for future growth and success.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Image Section */}
            <div className="relative group">
              <div className="aspect-square w-100 h-100overflow-hidden border-4 border-gray-800/50 group-hover:border-orange-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <img
                  src="/flyer.png"
                  alt="Working on projects"
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                />
                {/* Floating Achievement Icons */}
                <div className="absolute top-4 left-4 bg-gray-900/90 p-3 rounded-full z-20">
                  <Trophy className="w-6 h-6 text-orange-500" />
                </div>
                <div className="absolute top-4 right-4 bg-gray-900/90 p-3 rounded-full z-20">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              {/* Enhanced Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300">
                <span className="text-sm font-semibold flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  3+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/237653956170"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </>
  );
};

export default AboutSection;
