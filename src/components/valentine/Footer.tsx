import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 12 + Math.random() * 16,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose/30"
          style={{
            left: `${heart.x}%`,
            bottom: 0,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Decorative border */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <Heart className="text-rose animate-heartbeat" size={24} fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6 text-glow">
            Happy Valentine's Day!
          </h2>
          
          <p className="font-body text-xl text-foreground/80 mb-8 leading-relaxed">
            Thank you for being such an incredible friend. 
            <br />
            Distance means nothing when someone means everything. 💕
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="font-body">Made with</span>
            <Heart className="text-rose animate-heartbeat" size={16} fill="currentColor" />
            <span className="font-body">for you</span>
          </div>
        </motion.div>

        {/* Decorative bottom */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Heart 
                className="text-rose/50" 
                size={12 + i * 2} 
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
