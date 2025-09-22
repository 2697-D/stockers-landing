import { useState } from 'react';
import Aurora from '../Aurora';
import { useTheme } from '../ThemeProvider';
import GradientText from '../GradientText';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContent = () => {
    const whatWeDoSection = document.getElementById('what-we-do');
    if (whatWeDoSection) {
      whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme } = useTheme();

  // Lighter aurora for light theme
  const auroraProps = theme === 'light'
    ? {
        colorStops: [
          '#5eeaff', // pastel cyan
          '#ffe066', // pastel yellow-orange
          '#ff99e6', // pastel magenta
          '#66ffb3', // pastel green
          '#fff566', // pastel yellow
          '#ff6666'  // pastel red
        ],
        amplitude: 0.36,
        blend: 0.52
      }
    : {};

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Aurora animated background */}
      <div className="absolute inset-0 z-0">
        <Aurora {...auroraProps} />
      </div>

  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-40">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            <GradientText>Stockers</GradientText>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-16 font-light"
        >
          The smarter way to stock
        </motion.p>

      </div>

      {/* Interactive scroll trigger at the bottom of the hero section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
  className="absolute bottom-12 left-[43%] -translate-x-[43%] flex flex-col items-center z-20"
      >
        <motion.button
          className="group relative text-lg md:text-xl text-foreground/80 hover:text-primary transition-all duration-500 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={scrollToContent}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">
            {isHovered ? 'Discover our journey' : 'Hover to see our page'}
          </span>
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-lg blur-lg -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;