import { motion } from 'framer-motion';
import { Database, Code2, Cpu, Brain, Headset } from 'lucide-react';

// Custom icons for tracks
const DeFiIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none" strokeWidth="1.5" className="w-12 h-12">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const SocialGoodIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none" strokeWidth="1.5" className="w-12 h-12">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 2a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
    <path d="M9 14h6" />
    <path d="M9 18h6" />
  </svg>
);

const SaaSIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none" strokeWidth="1.5" className="w-12 h-12">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 7h10" />
    <path d="M7 11h10" />
  </svg>
);

// Track data from brochure
const tracks = [
  {
    icon: <DeFiIcon />,
    name: "De-Fi",
    description: "Cryptocurrency Trading Platforms, Smart Contracts & Protocols, Stablecoins, Blockchain-Based Identity, and DAO"
  },
  {
    icon: <SocialGoodIcon />,
    name: "Social Good",
    description: "Climate change, environmental conservation, poverty and hunger, ethics, and sustainable development"
  },
  {
    icon: <SaaSIcon />,
    name: "SaaS",
    description: "Business Management Tools, Collaboration & Productivity, Analytics & Data Management, Automation and Platforms"
  }
];

// Domain data from brochure
const domains = [
  {
    icon: <Cpu className="w-12 h-12" />,
    name: "IoT & embedded systems",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: <Database className="w-12 h-12" />,
    name: "Data Science",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    name: "Blockchain",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: <Brain className="w-12 h-12" />,
    name: "AI & ML",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: <Headset className="w-12 h-12" />,
    name: "AR VR",
    color: "from-green-500 to-teal-600"
  }
];

export default function Domains() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-red-500 opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* TRACKS SECTION */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          {/* Title with decorative elements */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"></div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tracks</span>
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-cyan-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-500"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </motion.h2>
            <div className="h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-300 text-sm sm:text-base mb-8 sm:mb-12"
          >
            Choose any one of the given tracks
          </motion.p>
          
          {/* Tracks grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
                }}
                className="relative overflow-hidden rounded-lg group"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 z-0"></div>
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border border-cyan-500/30 rounded-lg z-10"
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 8px rgba(6, 182, 212, 0.3)', '0 0 0px rgba(6, 182, 212, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                
                {/* Card content */}
                <div className="relative z-20 p-4 sm:p-6 flex flex-col items-center text-center">
                  {/* Icon with glow */}
                  <div className="relative mb-3 sm:mb-4">
                    <motion.div 
                      className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-20 blur-sm"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                    <div className="relative text-blue-500 group-hover:text-cyan-400 transition-colors duration-500">
                      {track.icon}
                    </div>
                  </div>
                  
                  {/* Track name */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-500 group-hover:text-cyan-400 transition-colors duration-300">
                    {track.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-100 transition-colors duration-300">
                    {track.description}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* DOMAINS SECTION */}
        <div>
          {/* Title with decorative elements */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"></div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Domains</span>
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-cyan-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-500"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </motion.h2>
            <div className="h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-300 text-sm sm:text-base mb-8 sm:mb-12"
          >
            Choose any two of the given domains
          </motion.p>
          
          {/* Domains grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)"
                }}
                className="relative overflow-hidden rounded-lg group"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 z-0"></div>
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border border-cyan-500/30 rounded-lg z-10"
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 5px rgba(6, 182, 212, 0.3)', '0 0 0px rgba(6, 182, 212, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                
                {/* Card content */}
                <div className="relative z-20 p-2 sm:p-4 flex flex-col items-center text-center">
                  {/* Icon with glow */}
                  <div className="relative mb-2 sm:mb-3">
                    <motion.div 
                      className={`absolute -inset-2 rounded-full bg-gradient-to-r ${domain.color} opacity-20 blur-sm`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                    <div className="relative text-cyan-400 group-hover:text-white transition-colors duration-500 scale-75 sm:scale-100">
                      {domain.icon}
                    </div>
                  </div>
                  
                  {/* Domain name */}
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                    {domain.name}
                  </h3>
                </div>
                
                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
            </motion.div>
          ))}
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <motion.div 
            className="px-4 sm:px-6 py-1 sm:py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-xs sm:text-sm"
            whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            &lt;select track="1" domains="2" /&gt;
          </motion.div>
        </div>
      </div>
    </div>
  );
}