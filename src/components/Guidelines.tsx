import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

// Updated guidelines from the brochure
const guidelines = [
  "Participants are required to remain within the college premises during the Hackathon, seeking permission from volunteers if there's a need to leave.",
  "The decisions made by the judging panel are final and binding. Participants are expected to respect and abide by the outcomes.",
  "Any form of misbehavior, whether directed towards team members, volunteers, judges, or evaluators, will not be tolerated. Participants are encouraged to maintain a positive and collaborative environment.",
  "Participants are responsible for bringing their own laptops, chargers, and any other necessary devices required for the implementation of their projects.",
  "Projects must span at least two specified domains. It is essential to integrate diverse aspects into the project to showcase a comprehensive skill set.",
  "Projects should be designed with real-life applications in mind, addressing practical issues and providing tangible solutions.",
  "Hackathon prioritizes research, avoids code memorization, and encourages internet use for inclusive collaboration, fostering innovation in a supportive environment."
];

export default function Guidelines() {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Guidelines</span>
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
          
          {/* Guidelines list */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-4 sm:p-6 md:p-8 rounded-lg border border-cyan-500/30 bg-black/80 backdrop-blur-xl overflow-hidden group"
              >
                {/* Numbered indicator with pixel-inspired styling */}
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-blue-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold">
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {guideline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom info note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-md"
          >
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm">
              <span className="text-red-400 font-bold">Important:</span> Failure to comply with these guidelines may result in disqualification. For any clarifications, please contact the organizing team.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8">
          <motion.div 
            className="px-6 py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-sm"
            whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            &lt;follow guidelines="true" /&gt;
          </motion.div>
        </div>
      </div>
    </div>
  );
}