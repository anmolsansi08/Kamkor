import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { SparkleGroup } from './SparkleEffect';
import { Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <SparkleGroup count={8} />
      
      {/* Decorative hearts */}
      <motion.div
        className="absolute top-20 left-10 text-rose/30"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 text-rose/20"
        animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Heart size={30} fill="currentColor" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center z-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Valentine greeting */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-4 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Happy Valentine's Day
        </motion.p>

        {/* Name with typewriter effect */}
        <motion.h1
          className="font-script text-5xl md:text-7xl lg:text-8xl text-primary mb-6 text-glow"
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
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="text-rose animate-heartbeat" size={24} fill="currentColor" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          A little something special, made just for you ✨
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
