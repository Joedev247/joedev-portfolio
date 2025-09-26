import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Pre-defined positions to avoid hydration mismatch
  const codeSymbols = [
    { symbol: '</', left: 92.9, top: 36.8, delay: 0 },
    { symbol: '{}', left: 45.7, top: 80.3, delay: 1 },
    { symbol: '()', left: 40.9, top: 58.9, delay: 2 },
    { symbol: '[]', left: 57.7, top: 67.5, delay: 3 },
    { symbol: '/>', left: 21.9, top: 89.7, delay: 4 },
    { symbol: '<>', left: 40.4, top: 25.0, delay: 1.5 },
    { symbol: '&&', left: 90.5, top: 45.4, delay: 2.5 },
    { symbol: '||', left: 65.4, top: 35.1, delay: 3.5 },
  ];
  
  const geometricShapes = [
    { left: 21.0, top: 49.6, scale: 1.5, delay: 0 },
    { left: 56.0, top: 26.4, scale: 2.0, delay: 0.5 },
    { left: 4.0, top: 13.6, scale: 1.2, delay: 1.0 },
    { left: 33.6, top: 67.8, scale: 1.8, delay: 1.5 },
    { left: 82.5, top: 86.8, scale: 1.3, delay: 2.0 },
    { left: 34.4, top: 31.2, scale: 1.6, delay: 2.5 },
    { left: 80.2, top: 59.6, scale: 1.4, delay: 3.0 },
    { left: 62.6, top: 51.7, scale: 1.7, delay: 3.5 },
    { left: 13.5, top: 22.3, scale: 1.1, delay: 4.0 },
    { left: 30.4, top: 22.7, scale: 1.9, delay: 4.5 },
    { left: 6.2, top: 60.1, scale: 1.3, delay: 5.0 },
    { left: 53.0, top: 43.8, scale: 1.5, delay: 5.5 },
  ];
  
  const binaryColumns = [
    '01110000111101000000',
    '11000110101011100111',
    '00101110011001010110',
    '10110100111000101001',
    '01001101110100110010',
    '11010010101100001111',
    '00111011010011101100',
    '10100111001110010011',
    '01110100101001110110',
    '11001010110111000101',
    '00110101001110110100',
    '10011100110101011001',
    '01100111010010110111',
    '11010100111001010110',
    '00101110110010111000',
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Enhanced Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            opacity: [0.15, 0.4, 0.3, 0.15],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-orange-600/12 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            opacity: [0.12, 0.35, 0.25, 0.12],
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-3/4 w-64 h-64 bg-orange-400/18 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.18, 0.4, 0.28, 0.18],
            x: [0, -40, 70, 0],
            y: [0, 60, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-8"
        animate={{
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Floating Code Symbols */}
      {isClient && (
        <div className="absolute inset-0">
          {codeSymbols.map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-orange-500/30 font-mono text-sm select-none"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                scale: [0, 1, 0],
                y: [0, -100, -200],
                x: [0, (i % 2 ? 20 : -20)],
                rotate: [0, (i * 45)],
              }}
              transition={{
                duration: (i % 3) * 2 + 6,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeOut",
              }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </div>
      )}

      {/* Geometric Shapes */}
      {isClient && (
        <div className="absolute inset-0">
          {geometricShapes.map((shape, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, shape.scale, 0],
                x: [0, (i % 2 ? 100 : -100)],
                y: [0, (i % 2 ? -100 : 100)],
              }}
              transition={{
                duration: (i % 2) * 2 + 4,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Binary Rain Effect */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {binaryColumns.map((binary, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-xs text-orange-500/15 select-none"
              style={{
                left: `${i * 6.67}%`,
                top: '-50px',
              }}
              initial={{ y: -50 }}
              animate={{
                y: ['0vh', '110vh'],
              }}
              transition={{
                duration: (i % 3) * 2 + 8,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
            >
              {binary}
            </motion.div>
          ))}
        </div>
      )}

      {/* Subtle Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 50 50 L 200 50 L 200 150 L 350 150"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M 100 300 L 300 300 L 300 100 L 500 100"
          stroke="url(#circuitGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Pulsing Corner Accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-600/8 to-transparent rounded-tl-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
