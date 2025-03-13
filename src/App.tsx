import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Terminal, Rocket, Sparkles, X, ChevronDown, Code, Zap, Award, ArrowRight, ExternalLink, Github } from 'lucide-react';
import Background from './components/Background';
import Timeline from './components/Timeline';
import Domains from './components/Domains';
import Guidelines from './components/Guidelines';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isFirstPhrase, setIsFirstPhrase] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  
  const phrases = [
    "Code. Create. Conquer.",
    "Innovate. Collaborate. Win.",
    "Design. Develop. Disrupt.",
    "Build. Break. Rebuild."
  ];
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Parallax effect for hero elements
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const logoY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const countdownY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // IEEE Logo entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
      // Reset typing text to ensure it starts from scratch
      setTypedText("");
      
      // Add a 2-second delay before starting the typing animation
      const typingTimer = setTimeout(() => {
        setStartTyping(true);
      }, 2000);
      
      return () => clearTimeout(typingTimer);
    }, 2500); // Show main content after IEEE logo animation
    
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    // Only start typing animation when main content is shown and startTyping is true
    if (!showMainContent || !startTyping) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // If we're at the beginning of a new phrase, reset typing speed to normal
        if (typedText === '' && typingSpeed > 1000) {
          console.log('Starting to type new phrase, resetting typing speed to 100ms');
          setTypingSpeed(100);
          return; // Exit early to apply the new typing speed
        }
        
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        
        if (typedText === currentPhrase) {
          // Pause at the end of typing for 5 seconds
          setTypingSpeed(5000);
          setIsDeleting(true);
          
          // No longer the first phrase
          if (isFirstPhrase) {
            setIsFirstPhrase(false);
          }
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Faster deletion speed
        
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          // Add a 6-7 second delay before starting to type the next phrase
          setTypingSpeed(6500);
          console.log('Moving to next phrase with delay:', 6500);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases, isFirstPhrase, showMainContent, startTyping]);

  // Reset typing animation when main content becomes visible
  useEffect(() => {
    if (showMainContent) {
      setTypedText("");
      setCurrentPhraseIndex(0);
      setIsDeleting(false);
      setTypingSpeed(100); // Initial typing speed
      setIsFirstPhrase(true);
    }
  }, [showMainContent]);

  useEffect(() => {
    // Set the target date to March 21st, 2025 at 1 PM
    const endDate = new Date('2025-03-21T13:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdownComplete(true);
        setShowCompletion(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      clearInterval(timer);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <Background />
      <div className="scanlines"></div>
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 z-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[1px] h-[40%] bg-cyan-500/30"></div>
          <div className="absolute top-1/3 right-1/4 w-[1px] h-[30%] bg-red-500/30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[1px] h-[25%] bg-cyan-500/30"></div>
          <div className="absolute top-1/2 right-1/3 w-[1px] h-[35%] bg-red-500/30"></div>
          
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-cyan-500/20"></div>
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-red-500/20"></div>

        <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-red-500/5 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          ></motion.div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-[-1]"></div>
        
        {/* IEEE Logo - Dramatic entrance */}
          <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
            animate={{
            scale: showMainContent ? 1 : [0.5, 1.2, 1], 
            opacity: showMainContent ? 1 : [0, 1, 1],
            y: showMainContent ? 0 : [-50, 0]
            }}
            transition={{
            duration: showMainContent ? 0 : 2,
            type: "spring",
            stiffness: 100
          }}
          className="flex flex-col items-center justify-center z-10 w-full max-w-7xl mx-auto mb-8 relative"
        >
          <div className="relative">
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              alt="IEEE Logo"
              className="w-40 md:w-64 mb-8 invert relative z-10"
            />
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl rounded-full z-0"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl mb-16 relative"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-medium">presents</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '120%' }}
              transition={{ delay: 0.8, duration: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content - Appears after IEEE logo animation */}
        <AnimatePresence>
          {showMainContent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ y: titleY }}
              className="relative z-10 my-8"
            >
              {/* AlgoForge Logo/Branding - Enhanced to fit cyberpunk theme */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="relative mb-12"
              >
                <div className="relative inline-block">
                  {/* Circuit pattern background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[1px] h-full bg-cyan-500/50"></div>
                    <div className="absolute top-0 right-1/4 w-[1px] h-full bg-red-500/50"></div>
                    <div className="absolute top-1/3 left-0 w-full h-[1px] bg-cyan-500/50"></div>
                    <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-red-500/50"></div>
                  </div>

                  {/* Main container with glowing border */}
                  <div className="relative px-8 py-4 bg-black/80 overflow-hidden group">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20"></div>
                    <div className="absolute inset-[1px] bg-black/90 z-0"></div>

                    {/* Glowing lines */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.15), transparent 25%)",
                          "radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15), transparent 25%)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    ></motion.div>

                    {/* Main text */}
                    <div className="relative z-10">
                      <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-center relative">
                        <div className="relative inline-block group">
                          {/* Main text with enhanced gradients */}
                          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-700 transition-all duration-500">
                            Algo
                          </span>
                          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-red-500 to-purple-700 group-hover:from-red-500 group-hover:to-purple-800 transition-all duration-500">
                            Forge
                          </span>

                          {/* Animated background elements */}
                          <div className="absolute inset-0 -z-10">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-red-500/10 blur-xl"
                              animate={{
                                opacity: [0.2, 0.4, 0.2],
                                scale: [0.98, 1.02, 0.98]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>

                          {/* Glitch effect overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-red-500/5"
                            animate={{
                              x: ["-1%", "1%", "-1%"],
                              opacity: [0.2, 0.3, 0.2]
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          {/* Decorative elements */}
                          <div className="absolute -inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
                          <div className="absolute -inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
                          
                          {/* Energy particles */}
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              background: [
                                "radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.08), transparent 50%)",
                                "radial-gradient(circle at 70% 60%, rgba(255, 0, 0, 0.08), transparent 50%)"
                              ]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        </div>
                      </h1>

                      {/* Dynamic scan lines */}
                      <motion.div 
                        className="absolute inset-0 overflow-hidden"
                        initial={{ opacity: 0.05 }}
                        animate={{ opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                            style={{ top: `${i * 10}%` }}
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "linear"
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>

                    {/* Subtle scan line effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"
                      animate={{ 
                        y: ["-200%", "200%"]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-red-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                </div>
              </motion.div>
              
              {/* Typing effect text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative mb-12"
              >
                <div className="h-12 flex justify-center items-center px-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400 inline-block">
                    <span>{typedText}</span>
                    <span className="animate-blink">|</span>
                  </h2>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mx-auto text-gray-100 mt-6 font-medium px-4"
              >
                A <span className="text-cyan-400 font-bold">36-hour</span> hackathon to forge the future through code and creativity
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-md font-bold text-lg md:text-xl
                           transition-all duration-300 flex items-center group relative overflow-hidden"
                >
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  
                  {/* Button glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                  
                  {/* Button shine effect */}
                  <motion.div 
                    className="absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shine"
                  ></motion.div>
        </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Countdown Timer */}
        <AnimatePresence>
          {showMainContent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{ y: countdownY }}
              className="w-full max-w-4xl mx-auto px-4 mt-12 md:mt-16 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-100">
                  <span className="text-red-500 font-bold">Hackathon</span> starts in
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <motion.div
                    key={unit}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
                    <div className="p-3 sm:p-4 md:p-8 rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-sm relative overflow-hidden group-hover:border-cyan-400 transition-colors duration-300">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Shine effect */}
                      <motion.div 
                        className="absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-shine"
                      ></motion.div>
                      
                      <div className="text-2xl sm:text-3xl md:text-6xl font-mono text-cyan-400 mb-2 text-center">{value}</div>
                      <div className="text-xs sm:text-sm md:text-lg uppercase text-red-500 text-center font-medium tracking-wider">{unit}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center mt-12"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  <span className="text-cyan-400 mb-2 text-sm font-medium">Scroll to explore</span>
                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-[15%] w-3 h-3 bg-cyan-500 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-1/3 right-[20%] w-2 h-2 bg-red-500 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 left-[30%] w-4 h-4 bg-blue-500 rounded-full"
            animate={{ 
              y: [0, -25, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          ></motion.div>
        </div>
      </section>

      {/* Countdown Complete Animation */}
      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-center relative"
            >
              <button
                onClick={() => setShowCompletion(false)}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="mb-8"
              >
                <Rocket className="w-16 h-16 md:w-24 md:h-24 mx-auto text-cyan-400" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-4 cyberpunk-text"
              >
                HACKATHON STARTED!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl text-cyan-400 mb-8"
              >
                Let the coding begin!
              </motion.p>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto text-yellow-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with semi-transparent background */}
      <div className="relative bg-black/40 mt-20 pt-1">
        {/* About Section */}
        <section id="about" ref={aboutRef} className="relative py-20 md:py-32 px-6 overflow-hidden">
          {/* Animated circuit lines in background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-cyan-400"></div>
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-cyan-400"></div>
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-400"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-cyan-400"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 opacity-30"></div>
            
            {/* Animated grid dots */}
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, colIndex) => (
                <div key={`col-${colIndex}`} className="relative h-full">
                  {Array.from({ length: 8 }).map((_, rowIndex) => (
                    <motion.div
                      key={`dot-${colIndex}-${rowIndex}`}
                      className="absolute w-1 h-1 bg-cyan-500/50 rounded-full"
                      style={{ top: `${(rowIndex + 1) * 12.5}%`, left: '50%' }}
                      animate={{ 
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: (colIndex * rowIndex) % 5
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Title with decorative elements */}
              <div className="flex items-center justify-center mb-16">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-gradient-to-r from-transparent to-cyan-500"
                ></motion.div>
                
              <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold mx-4 sm:mx-6 cyberpunk-text text-center relative"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">About</span>
                  <span className="block md:inline md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">AlgoForge</span>
                  
                  {/* Decorative elements */}
                  <div className="absolute -inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
                  <div className="absolute -inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
                </motion.h2>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-gradient-to-l from-transparent to-red-500"
                ></motion.div>
              </div>

              {/* Main content with glowing border */}
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left side content */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="md:col-span-7 relative"
                >
                  <div className="relative p-8 rounded-lg border border-cyan-500/30 bg-black/80 backdrop-blur-xl overflow-hidden group">
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
                    
                    {/* Shine effect */}
                    <motion.div 
                      className="absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-shine"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6"
                    >
                      We are excited to present <span className="text-cyan-400 font-bold">AlgoForge</span>, the first-ever hackathon conducted by <span className="text-red-500 font-bold">IEEE-KJSIT Student Chapter</span>. Taking place from <span className="text-cyan-400 font-mono">21/03/2025 - 23/03/2025</span>, this 36-hour intensive competition aims to foster innovation and collaboration by challenging participants to solve real-world problems using a multi-domain approach.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6"
                    >
                      AlgoForge is designed to push the boundaries of creativity and technical skills while encouraging teamwork, time management, and strategic thinking.
                    </motion.p>
                    
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl text-gray-100 leading-relaxed"
              >
                      By bringing together tech enthusiasts, problem-solvers, and visionaries, AlgoForge will showcase the immense potential of KJSIT innovators, positioning KJSIT as a leading hub for innovation within the IEEE community and beyond.
              </motion.p>
                    
                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-cyan-500/20"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <Code className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-cyan-400 font-bold mb-1">Multi-Domain</h4>
                          <p className="text-sm text-gray-100">Combine at least two domains in your solution</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-red-500/20"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-red-400 font-bold mb-1">36 Hours</h4>
                          <p className="text-sm text-gray-100">Intensive coding and problem-solving</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-blue-500/20"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Award className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-blue-400 font-bold mb-1">Prizes</h4>
                          <p className="text-sm text-gray-100">Exciting rewards for top performers</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-purple-500/20"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Github className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-purple-400 font-bold mb-1">Open Source</h4>
                          <p className="text-sm text-gray-100">Showcase your work to the community</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      viewport={{ once: true }}
                      className="mt-8 flex justify-center md:justify-start"
                    >
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-md font-bold text-sm transition-all duration-300 flex items-center group">
                        Register Your Team
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Right side decorative element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="md:col-span-5 flex justify-center items-center"
                >
                  <div className="relative w-full max-w-[350px] aspect-square">
                    {/* Holographic card effect */}
                    <div className="w-full h-full relative rounded-xl overflow-hidden border-2 border-cyan-500/50 group">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-purple-900/40"></div>
                      
                      {/* Grid lines */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-cyan-400"></div>
                        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-cyan-400"></div>
                        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-400"></div>
                        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-cyan-400"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <motion.div
                          animate={{ 
                            y: [0, -5, 0],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Sparkles className="w-16 h-16 text-cyan-400 mb-4" />
                        </motion.div>
                        
                        <h3 className="text-3xl font-bold text-white mb-2 cyberpunk-text">36 Hours</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-red-500 mb-4"></div>
                        <p className="text-cyan-300 mb-4">of Innovation</p>
                        
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <Terminal className="w-10 h-10 text-red-400" />
                        </motion.div>
                        
                        {/* Key dates */}
                        <div className="mt-6 w-full bg-black/50 p-3 rounded-lg border border-cyan-500/30">
                          <div className="flex justify-between items-center mb-2 text-xs">
                            <span className="text-gray-100">Registration Opens</span>
                            <span className="text-cyan-400 font-mono">01/03/2025</span>
                          </div>
                          <div className="flex justify-between items-center mb-2 text-xs">
                            <span className="text-gray-100">Registration Closes</span>
                            <span className="text-cyan-400 font-mono">18/03/2025</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-100">Event Dates</span>
                            <span className="text-red-400 font-mono">21-23/03/2025</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Holographic shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        animate={{ 
                          backgroundPosition: ['0% 0%', '100% 100%']
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.div>
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl -z-10"
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.9, 1.05, 0.9]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    ></motion.div>
                    
                    {/* Floating elements */}
                    <motion.div 
                      className="absolute -top-8 -right-8 w-16 h-16"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-lg"></div>
                        <div className="absolute inset-2 border-2 border-dashed border-red-500/50 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-6 -left-6 w-12 h-12"
                      animate={{ 
                        y: [0, 10, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                        <div className="absolute inset-2 border-2 border-dashed border-cyan-500/50 rounded-full"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Domains />
        <Timeline />
        <Guidelines />

        {/* Footer */}
        <footer className="relative py-6 sm:py-8 md:py-12 bg-gray-900/90 backdrop-blur-xl text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#timeline" className="hover:text-cyan-400 transition-colors">Timeline</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400">Follow Us</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <a href="https://www.linkedin.com/company/ieee-kjsieit" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <a href="https://github.com/IEEE-KJSIEIT" className="hover:text-cyan-400 transition-colors">GitHub</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073-4.949zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a href="https://www.instagram.com/ieeekjsieit/" className="hover:text-cyan-400 transition-colors">Instagram</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400">Contact Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-semibold">Madhav Asawa (Chairperson)</p>
                  <p>+91 83087 04334</p>
                </div>
                <div>
                  <p className="font-semibold">Saif Bhure (Vice Chairperson)</p>
                  <p>+91 82374 55400</p>
                </div>
                <div>
                  <p className="font-semibold">Shrikant Bhosle (Secretary)</p>
                  <p>+91 77108 92864</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-3 sm:mb-4 text-cyan-400" />
            <p>© 2024 AlgoForge - All Rights Reserved</p>
            <p className="mt-1 sm:mt-2">Designed and Developed by Qasim Kharodia and Aliasghar Masood</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;