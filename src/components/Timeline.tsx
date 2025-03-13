import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Simplified timeline data with complete schedule
const timelineData = [
  {
    date: "DAY 1",
    keyEvents: [
      { time: "13:00", title: "Reporting and Registration" },
      { time: "15:00", title: "Briefing on rules, prizes and more" },
      { time: "17:00", title: "Kickoff (Timer starts, T=0)" },
      { time: "20:00", title: "Dinner Break (T-Pause)" },
      { time: "21:00", title: "Resume Project Development (T = 3 hrs)" }
    ]
  },
  {
    date: "DAY 2",
    keyEvents: [
      { time: "08:00", title: "Breakfast (T-Pause)" },
      { time: "09:00", title: "Resume Project Development (T = 14 hrs)" },
      { time: "13:00", title: "Lunch & Round 1 Judging (T-Pause)" },
      { time: "15:00", title: "Results Announcement" },
      { time: "16:00", title: "Round 2 with Top 15 Teams (T = 18 hrs)" },
      { time: "20:00", title: "Dinner Break (T-Pause)" },
      { time: "21:00", title: "Resume Project Development (T = 22 hrs)" }
    ]
  },
  {
    date: "DAY 3",
    keyEvents: [
      { time: "08:00", title: "Breakfast (T-Pause)" },
      { time: "09:00", title: "Resume Final Work (T = 34 hrs)" },
      { time: "11:00", title: "Final Presentations (T = 36 hrs)" },
      { time: "13:00", title: "Results" }
    ]
  }
];

export default function Timeline() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background element for visual separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
      
      {/* Background circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Title with decorative elements */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"></div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Schedule</span>
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
        
        {/* Timeline cards in horizontal scroll */}
        <div className="flex justify-between items-stretch gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 hide-scrollbar">
          {timelineData.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-w-[250px] sm:min-w-[300px] flex-1 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm 
                         border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400/70 
                         transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] 
                         transform hover:-translate-y-1"
            >
              {/* Day header */}
              <div className="bg-gradient-to-r from-blue-600/80 to-blue-800/80 p-3 sm:p-4 border-b border-cyan-500/30 relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-cyan-400/70"></div>
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-cyan-400/70"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-cyan-400/70"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-cyan-400/70"></div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">{day.date}</h3>
              </div>
              
              {/* Day content */}
              <div className="p-3 sm:p-5">
                {day.keyEvents.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (eventIndex * 0.1) }}
                    className="mb-3 sm:mb-4 last:mb-0 group"
                  >
                    <div className="flex items-center">
                      <div className="w-14 sm:w-16 h-7 sm:h-8 bg-blue-900/30 rounded flex items-center justify-center 
                                    border border-blue-500/40 group-hover:bg-blue-800/50 transition-colors duration-300">
                        <span className="text-cyan-400 font-mono text-xs sm:text-sm">{event.time}</span>
                      </div>
                      <div className="h-[2px] w-2 sm:w-3 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                      <div className="ml-1 sm:ml-2 flex-1">
                        <p className="text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300">{event.title}</p>
                      </div>
                    </div>
                    
                    {/* Connector line between events */}
                    {eventIndex < day.keyEvents.length - 1 && (
                      <div className="ml-7 sm:ml-8 my-1 sm:my-2 w-[1px] h-2 sm:h-3 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Day connector */}
              {index < timelineData.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px]">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-r from-cyan-500 to-transparent"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Mobile scroll indicator */}
        <motion.div 
          className="md:hidden flex justify-center mt-3 sm:mt-4 text-cyan-400/70 text-xs sm:text-sm"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Swipe for more</span>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </motion.div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <motion.div 
            className="px-4 sm:px-6 py-1 sm:py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-xs sm:text-sm"
            whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            &lt;time remaining="countdown.start()" /&gt;
          </motion.div>
        </div>
      </div>
    </div>
  );
}