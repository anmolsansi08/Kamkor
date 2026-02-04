import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, Mail } from 'lucide-react';
import { Sparkle } from './SparkleEffect';

interface Surprise {
  id: number;
  title: string;
  message: string;
  icon: 'heart' | 'envelope';
}

const surprises: Surprise[] = [
  {
    id: 1,
    title: 'Reason #1',
    message: 'Your smile lights up even the cloudiest days! ☀️',
    icon: 'heart',
  },
  {
    id: 2,
    title: 'Reason #2',
    message: 'You always know exactly what to say to make things better 💕',
    icon: 'envelope',
  },
  {
    id: 3,
    title: 'Reason #3',
    message: 'Your kindness inspires everyone around you ✨',
    icon: 'heart',
  },
  {
    id: 4,
    title: 'Reason #4',
    message: 'You make long-distance friendship feel like no distance at all 🌍',
    icon: 'envelope',
  },
  {
    id: 5,
    title: 'Reason #5',
    message: 'You are simply irreplaceable in my life! 💖',
    icon: 'heart',
  },
];

const SurpriseCard = ({ surprise, index }: { surprise: Surprise; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className={`w-full p-6 rounded-lg vintage-border transition-colors ${
          isOpen 
            ? 'bg-rose-light/30' 
            : 'bg-card hover:bg-rose-light/10'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: isOpen ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {surprise.icon === 'heart' ? (
                <Heart 
                  className="text-rose animate-heartbeat" 
                  size={40} 
                  fill="currentColor"
                />
              ) : (
                <Mail className="text-gold" size={40} />
              )}
              <p className="font-script text-xl text-foreground">
                Click to reveal!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              className="text-center relative"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.4 }}
            >
              {/* Sparkles on reveal */}
              <motion.div
                className="absolute -top-2 -left-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkle />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkle />
              </motion.div>

              <h3 className="font-serif text-lg text-primary mb-3">
                {surprise.title}
              </h3>
              <p className="font-body text-lg text-foreground leading-relaxed">
                {surprise.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export const SurpriseSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Reasons Why You're Amazing
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Click each card to reveal a surprise! 💕
          </p>
          <div className="h-px w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Surprise cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {surprises.map((surprise, index) => (
            <SurpriseCard key={surprise.id} surprise={surprise} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
