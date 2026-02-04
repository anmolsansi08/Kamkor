import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { SparkleGroup } from './SparkleEffect';
import { Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      <SparkleGroup count={8} />
      
      {/* Decorative hearts - hidden on small mobile */}
      <motion.div
        className="absolute top-20 left-4 md:left-10 text-rose/30 hidden sm:block"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-4 md:right-16 text-rose/20 hidden sm:block"
        animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Heart size={30} fill="currentColor" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center z-20 max-w-4xl mx-auto px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Valentine greeting */}
        <motion.p
          className="text-base md:text-xl text-muted-foreground mb-3 md:mb-4 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Happy Valentine's Day
        </motion.p>

        {/* Name with typewriter effect */}
        <motion.h1
          className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary mb-4 md:mb-6 text-glow leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypewriterText
            text="Aloo wala tiffin"
            delay={800}
            speed={100}
          />
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="text-rose animate-heartbeat" size={20} fill="currentColor" />
          <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          A little something special, made just for you ✨
        </motion.p>
      </motion.div>

      {/* Scroll indicator - smaller on mobile */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5 md:pt-2">
          <motion.div
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
