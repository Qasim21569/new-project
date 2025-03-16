import { motion } from 'framer-motion';
import { Gift, Award } from 'lucide-react';

export default function Prizes() {
  return (
    <div className="py-20 px-6 relative overflow-hidden">
      {/* Background circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-red-500 opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Title with decorative elements */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[2px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"></div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Prize</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 ml-2">Pool</span>
            <motion.div 
              className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-red-500"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </motion.h2>
          <div className="h-[2px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-red-500"></div>
        </div>
        
        {/* Main content with glowing border */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative p-8 rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-xl"
        >
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
          
          {/* Glowing accent */}
          <motion.div 
            className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20 z-[-1] blur-sm"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          
          {/* Trophy icon with animation - replaced with static Gift icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 to-yellow-300/30 rounded-full blur-xl"></div>
              <Gift className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400" />
            </div>
          </div>
          
          {/* Total prize pool - fixed alignment */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 mb-4"
              >
                Total Prize Pool
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative inline-block"
              >
                <motion.h3
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(255,255,255,0.3)",
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 5px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"
                >
                  ₹50,000
                </motion.h3>
                <motion.div
                  className="absolute -inset-x-8 -inset-y-4 rounded-lg border border-yellow-500/30 z-[-1]"
                  animate={{ 
                    borderColor: ["rgba(234,179,8,0.3)", "rgba(234,179,8,0.6)", "rgba(234,179,8,0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base text-gray-400 mt-4"
              >
                Cash Prize <motion.span 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block text-yellow-400 mx-1"
                >+</motion.span> Goodies
              </motion.p>
            </div>
          </div>
          
          {/* Prize breakdown - Podium style layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:mt-16 md:mb-12 relative">
            {/* 1st Runner Up - Left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative p-6 rounded-lg border border-gray-400/30 bg-gradient-to-b from-black/80 to-gray-800/10 backdrop-blur-xl overflow-hidden group md:self-end md:mt-16"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Award className="w-10 h-10 text-gray-400" />
                  <motion.div 
                    className="absolute inset-0 bg-gray-400 rounded-full blur-lg opacity-30"
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold text-center text-gray-400 mb-2">1st Runner Up</h4>
              <div className="text-center">
                <motion.p
                  animate={{ 
                    textShadow: [
                      "0 0 2px rgba(156,163,175,0.3)",
                      "0 0 8px rgba(156,163,175,0.5)",
                      "0 0 2px rgba(156,163,175,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  ₹15,000
                </motion.p>
                <p className="text-sm text-gray-400 mt-1">cash prize</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-400"></div>
            </motion.div>
            
            {/* Winner - Middle and higher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-6 rounded-lg border border-yellow-500/30 bg-gradient-to-b from-black/80 to-yellow-900/10 backdrop-blur-xl overflow-hidden group md:transform md:-translate-y-24 z-10"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Crown on top */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-yellow-400 text-3xl">👑</div>
                </motion.div>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Award className="w-14 h-14 text-yellow-400" />
                  <motion.div 
                    className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-30"
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold text-center text-yellow-400 mb-2">Winner</h4>
              <div className="text-center">
                <motion.p
                  animate={{ 
                    textShadow: [
                      "0 0 2px rgba(234,179,8,0.3)",
                      "0 0 8px rgba(234,179,8,0.5)",
                      "0 0 2px rgba(234,179,8,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  ₹25,000
                </motion.p>
                <p className="text-sm text-gray-400 mt-1">cash prize</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-yellow-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-500"></div>
            </motion.div>
            
            {/* 2nd Runner Up - Right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative p-6 rounded-lg border border-amber-700/30 bg-gradient-to-b from-black/80 to-amber-900/10 backdrop-blur-xl overflow-hidden group md:self-end md:mt-32"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-amber-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Award className="w-7 h-7 text-amber-700" />
                  <motion.div 
                    className="absolute inset-0 bg-amber-700 rounded-full blur-lg opacity-30"
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
              
              <h4 className="text-lg sm:text-xl font-bold text-center text-amber-700 mb-2">2nd Runner Up</h4>
              <div className="text-center">
                <motion.p
                  animate={{ 
                    textShadow: [
                      "0 0 2px rgba(180,83,9,0.3)",
                      "0 0 8px rgba(180,83,9,0.5)",
                      "0 0 2px rgba(180,83,9,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl sm:text-2xl font-bold text-white"
                >
                  ₹10,000
                </motion.p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">cash prize</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-700"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-700"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-700"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-700"></div>
            </motion.div>
            
            {/* Podium base - redesigned to be more visible */}
            <div className="hidden md:block absolute -bottom-8 left-0 right-0 h-16">
              {/* First place podium (middle) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[33%] h-16 bg-gradient-to-t from-yellow-900/50 to-yellow-700/20 border-t-2 border-yellow-500/50 rounded-t-lg"></div>
              
              {/* Second place podium (left) */}
              <div className="absolute left-[8%] bottom-0 w-[30%] h-10 bg-gradient-to-t from-gray-800/50 to-gray-600/20 border-t-2 border-gray-400/50 rounded-t-lg"></div>
              
              {/* Third place podium (right) */}
              <div className="absolute right-[8%] bottom-0 w-[30%] h-6 bg-gradient-to-t from-amber-900/50 to-amber-700/20 border-t-2 border-amber-700/50 rounded-t-lg"></div>
            </div>
          </div>
          
          {/* Particle animation background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -Math.random() * 50 - 20],
                  x: [0, (Math.random() - 0.5) * 30],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8">
          <motion.div 
            className="px-6 py-2 border border-yellow-500/50 rounded-full bg-black/50 text-yellow-400 font-mono text-sm"
            whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            &lt;prize value="₹50,000" /&gt;
          </motion.div>
        </div>
      </div>
    </div>
  );
} 